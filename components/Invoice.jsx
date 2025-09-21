import React from 'react'

const Invoice = () => {
    return (
        <div className="col">
            <div className="your-invoice">
                <div className="header">
                    <div className="header-main">
                        <h1>Zero</h1>
                        <div className="invoice-col">
                            <p>#{Date.now()}</p>
                            <p>{new Date().toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className="header-flex">
                        <div className="header-col">
                            <b>Invoice to:</b>
                            <p>Walking customer</p>
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
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}></td>
                            <td>Subtotal</td>
                            <td>$0</td>
                        </tr>
                        <tr>
                            <td colSpan={3}></td>
                            <td>Total GST</td>
                            <td>10%</td>
                        </tr>
                        <tr>
                            <td colSpan={3}></td>
                            <td><b>Total</b></td>
                            <td><b>$0</b></td>
                        </tr>
                    </tfoot>
                </table>
                <footer>
                    <div className="footer-col">
                        <h2>Thank you</h2>
                    </div>
                    <div className="footer-col"></div>
                </footer>
            </div>
        </div>
    )
}

export default Invoice