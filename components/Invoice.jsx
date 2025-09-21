"use client"
import React, { useEffect, useState } from 'react'

const Invoice = ({ data, template }) => {
    const sum = (a, b) => { return a + b };
    const subtotal = data.map(e => e.price * e.qty).reduce(sum, 0);
    const gst = subtotal * 0.10;
    const total = gst + subtotal;
    console.log(template);
    return (
        <div className="col">
            <div className="your-invoice">
                <div className="header">
                    <div className="header-main">
                        <h1>{template.companyName.length ? template.companyName : "Zero Invoice"}</h1>
                        <div className="invoice-col">
                            <p>#{Date.now()}</p>
                            <p>{new Date().toLocaleDateString()}</p>
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
                                    <td>{e.qty > 1 ? e.price : "-"}</td>
                                    <td>{e.price * e.qty}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}></td>
                            <td>Subtotal</td>
                            <td>${subtotal}</td>
                        </tr>
                        <tr>
                            <td colSpan={3}></td>
                            <td>Total GST</td>
                            <td>${gst}</td>
                        </tr>
                        <tr>
                            <td colSpan={3}></td>
                            <td><b>Total</b></td>
                            <td><b>${total}</b></td>
                        </tr>
                    </tfoot>
                </table>
                <footer>
                    <div className="footer-col">
                        <h2>Thank you</h2>
                        <p>Include GST at the standard 10% rate</p>
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