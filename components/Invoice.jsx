import React from 'react'

const Invoice = () => {
    return (
        <div className="col">
            <div className="your-invoice">
                <div className="header">
                    <div className="header-main">
                        <h1>Veb Edge</h1>
                        <div className="invoice-col">
                            <p>#0240218</p>
                            <p>20 Sep 2025</p>
                        </div>
                    </div>
                    <div className="header-flex">
                        <div className="header-col">
                            <b>Invoice to:</b>
                            <p>Name: Muhammad Jazib</p>
                            <p>Email: mjxdex@gmail.com</p>
                            <p>Contact: +92 321 4310717</p>
                            <p>Address: Walking Road, 50260 Unit salisbury, Adelaide, South Australia</p>
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
                        <tr>
                            <td>1</td>
                            <td>Brake Pads</td>
                            <td>4</td>
                            <td>$75</td>
                            <td>$300</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Engine Oil (5L)</td>
                            <td>3</td>
                            <td>$40</td>
                            <td>$120</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Air Filter</td>
                            <td>2</td>
                            <td>$25</td>
                            <td>$50</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Battery 12V</td>
                            <td>1</td>
                            <td>$180</td>
                            <td>$180</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Headlight Bulb</td>
                            <td>4</td>
                            <td>$15</td>
                            <td>$60</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Tyre Alignment</td>
                            <td>1</td>
                            <td>$75</td>
                            <td>$75</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Car Cover</td>
                            <td>2</td>
                            <td>$55</td>
                            <td>$110</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Spark Plugs</td>
                            <td>8</td>
                            <td>$12</td>
                            <td>$96</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}></td>
                            <td>Subtotal</td>
                            <td>$4900</td>
                        </tr>
                        <tr>
                            <td colSpan={3}></td>
                            <td>Total GST</td>
                            <td>10%</td>
                        </tr>
                        <tr>
                            <td colSpan={3}></td>
                            <td><b>Total</b></td>
                            <td><b>$4900</b></td>
                        </tr>
                    </tfoot>
                </table>
                <footer>
                    <div className="footer-col">
                        <h2>Thank you</h2>
                        <p>Website: vedege.com</p>
                        <p>Email: one@vebedge.com</p>
                    </div>
                    <div className="footer-col"></div>
                </footer>
            </div>
        </div>
    )
}

export default Invoice