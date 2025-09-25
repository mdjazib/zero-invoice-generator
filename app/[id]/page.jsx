"use client"
import Invoice from '@/components/Invoice'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { toast } from 'sonner'
import { Loader } from 'lucide-react'

const page = () => {
    const ref = useRef();
    const { id } = useParams();
    const [invoiceId, setInvoiceId] = useState("00000000000");
    const [date, setDate] = useState("");
    const [gst, setGST] = useState("0.0");
    const [currency, setCurrency] = useState("PKR");
    const [invoice, setInvoice] = useState([]);
    const [loading, setLoading] = useState(true);
    const [template, setTemplate] = useState({
        companyName: "",
        companyWebsite: "",
        companyEmail: "",
        clientName: "",
        clientEmail: "",
        clientContact: "",
        clientAddress: ""
    });
    const theme = {
        light: {
            "--base-color": "lch(100 0 0)",
            "--text-color": "lch(0 0 0)",
            "--accent-color": "lch(36.94 59.85 9.8)"
        }
    }
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`/api/invoice/${id}`);
                setDate(new Date(data.createdAt).toLocaleDateString());
                setCurrency(data.currency);
                setInvoice(data.invoice);
                setInvoiceId(data.id);
                setLoading(false);
                setGST(data.gst);
                setTemplate({
                    companyName: data.companyName,
                    companyWebsite: data.companyWebsite,
                    companyEmail: data.companyEmail,
                    clientName: data.clientName,
                    clientEmail: data.clientEmail,
                    clientContact: data.clientContact,
                    clientAddress: data.clientAddress
                });
            } catch (error) {
                toast.error("Something went wrong.");
            }
        })();
    }, []);
    return (
        <div style={theme.light} className='root'>
            {
                loading ?
                    <div className='loading-screen'>
                        <div className="loading">
                            <Loader /> <p>Loading Invoice</p>
                        </div>
                    </div> :
                    <Invoice data={invoice} template={template} ref={ref} setInvoiceId={() => { }} iid={invoiceId} date={date} gst={gst} currency={currency} />
            }
        </div>
    )
}

export default page