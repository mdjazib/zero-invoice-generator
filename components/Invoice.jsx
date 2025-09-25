"use client"
import React, { useEffect, useState } from 'react'

const Invoice = ({ data, template, ref, setInvoiceId, iid = false, date = new Date().toLocaleDateString(), gst: dynamicGST, currency }) => {
    const [id, setId] = useState(0);
    const sum = (a, b) => { return a + b };
    const [invoiceCurrency, setInvoiceCurrency] = useState("PKR");
    const subtotal = data.map(e => e.price * e.qty).reduce(sum, 0);
    const gst = subtotal * Number(dynamicGST);
    const total = gst + subtotal;
    const currencyObject = {
        "USD": "$",
        "CAD": "$",
        "AUD": "$",
        "NZD": "$",
        "SGD": "$",
        "PKR": "Rs",
        "SAR": "﷼",
        "AED": "د.إ",
        "EUR": "€",
        "GBP": "£"
    }
    useEffect(() => {
        if (iid) {
            setId(iid);
        } else {
            const did = Date.now();
            setInvoiceId(did);
            setId(did);
        }
    }, [data, template, iid]);
    useEffect(() => {
        setInvoiceCurrency(currency === undefined ? "PKR" : currency);
    }, [invoiceCurrency, currency]);
    return (
        <div className="col --invoice-rec">
            <div ref={ref} className="your-invoice">
                <div className="header">
                    <div className="header-main">
                        <h1>{template.companyName.length ? template.companyName : "Zero Invoice"}</h1>
                        <div className="invoice-col">
                            <p>#{id ? id : "00000000000"}</p>
                            <p>{date}</p>
                        </div>
                    </div>
                    <div className="header-flex">
                        <div className="header-col">
                            <b>Invoice to:</b>
                            {template.clientName.length ? <p>Name: {template.clientName}</p> : <p>Walking customer</p>}
                            {template.clientEmail.length ? <p>Email: {template.clientEmail}</p> : <></>}
                            {template.clientContact.length ? <p>Contact: {template.clientContact}</p> : <></>}
                            {template.clientAddress.length ? <p>Address: {template.clientAddress}</p> : <></>}
                        </div>
                        <div className="header-col"></div>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Description</th>
                            <th>Qty</th>
                            <th>Unit Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((e, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.qty > 1 ? e.qty : "-"}</td>
                                    <td>{e.qty > 1 ? <>{currencyObject[invoiceCurrency]} {e.price}</> : "-"}</td>
                                    <td>{currencyObject[invoiceCurrency]} {e.price * e.qty}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}></td>
                            <td>Subtotal</td>
                            <td>{currencyObject[invoiceCurrency]} {subtotal}</td>
                        </tr>
                        <tr>
                            <td colSpan={3}></td>
                            <td>Total GST</td>
                            <td>{currencyObject[invoiceCurrency]} {gst.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td colSpan={3}></td>
                            <td><b>Total</b></td>
                            <td><b>{total} {invoiceCurrency}</b></td>
                        </tr>
                    </tfoot>
                </table>
                <footer>
                    <div className="footer-col">
                        <h2>Thank you</h2>
                        {dynamicGST === "0.00" ? null : (
                            <p>GST is included at {dynamicGST.split(".")[1].replace(/^0/, "")}% of the total value.</p>
                        )}
                        {template.companyEmail.length ? <p>Email: {template.companyEmail}</p> : <></>}
                        {template.companyWebsite.length ? <p>Visit: {template.companyWebsite}</p> : <></>}
                    </div>
                    <div className="footer-col"></div>
                </footer>
            </div>
        </div>
    )
}

export default Invoice