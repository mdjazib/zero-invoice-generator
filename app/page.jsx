"use client"
import Description from '@/components/Description'
import Invoice from '@/components/Invoice'
import { Copy, ImageDown, Loader, Mail, Minus, Moon, Plus, Printer, Sun } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { useClipboard } from 'use-clipboard-copy'
import domtoimage from "dom-to-image-more"
import { toast } from 'sonner'
import axios from 'axios'

const page = () => {
  const ref = useRef();
  const clipboard = useClipboard();
  const [invoiceId, setInvoiceId] = useState(0);
  const [themeSwitch, setThemeSwitch] = useState(false);
  const [invoice, setInvoice] = useState([]);
  const [oldInvoice, setOldInvoice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [template, setTemplate] = useState({
    companyName: "",
    companyWebsite: "",
    companyEmail: "",
    clientName: "",
    clientEmail: "",
    clientContact: "",
    clientAddress: ""
  });
  const [step, setStep] = useState(1);
  const theme = {
    light: {
      "--base-color": "lch(100 0 0)",
      "--text-color": "lch(0 0 0)",
      "--accent-color": "lch(36.94 59.85 9.8)"
    },
    dark: {
      "--base-color": "lch(8 0 0)",
      "--text-color": "lch(90 0 0)",
      "--accent-color": "lch(36.94 59.85 9.8)"
    }
  }
  useEffect(() => {
    setThemeSwitch(localStorage.getItem("zero-ig-theme") === "true");
    const savedCompany = localStorage.getItem("zero-ig-company");
    if (savedCompany) {
      setTemplate((prev) => ({ ...prev, ...JSON.parse(savedCompany) }));
    }
  }, []);
  const themeSwitcher = (theme) => {
    localStorage.setItem("zero-ig-theme", theme);
    setThemeSwitch(theme);
  }
  const stepSwitcher = (step) => {
    setStep(step);
  }
  const handleImageDownload = async () => {
    if (!ref.current) return;
    const scale = 3;
    ref.current.style.minHeight = "fit-content";
    const style = {
      transform: `scale(${scale})`,
      transformOrigin: "top left",
      width: `${ref.current.offsetWidth}px`,
      height: `${ref.current.offsetHeight}px`,
    };
    const param = {
      width: ref.current.offsetWidth * scale,
      height: ref.current.offsetHeight * scale,
      style,
    };
    domtoimage.toPng(ref.current, param)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `#${invoiceId}-${template.companyName}-zero-invoice-generator.png`;
        link.click();
      })
      .catch((err) => {
        toast.error("Something went wrong.");
      });
    setTimeout(() => {
      ref.current.style.minHeight = "unset";
    }, 0);
  };
  const updateCompanyField = (field, value) => {
    setTemplate((prev) => {
      const updated = { ...prev, [field]: value };
      const companyData = {
        companyName: updated.companyName,
        companyWebsite: updated.companyWebsite,
        companyEmail: updated.companyEmail,
      };
      localStorage.setItem("zero-ig-company", JSON.stringify(companyData));
      return updated;
    });
  };
  const invoiceFormData = async (route) => {
    const formdata = new FormData();
    formdata.append("id", invoiceId);
    formdata.append("companyName", template.companyName);
    formdata.append("companyEmail", template.companyEmail);
    formdata.append("companyWebsite", template.companyWebsite);
    formdata.append("clientName", template.clientName);
    formdata.append("clientAddress", template.clientAddress);
    formdata.append("clientContact", template.clientContact);
    formdata.append("clientEmail", template.clientEmail);
    formdata.append("invoice", JSON.stringify(invoice));
    const { data } = await axios.post(`/api/invoice/${route}`, formdata, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    return data;
  }
  const handleInvoiceCopy = async () => {
    try {
      if (invoiceId === oldInvoice) {
        toast.success("Invoice link successfully copied.");
        clipboard.copy(`${window.location.origin}/${invoiceId}`);
      } else {
        setLoading(true);
        const data = await invoiceFormData("copy");
        if (data === 200) {
          toast.success("Invoice link successfully copied.");
          clipboard.copy(`${window.location.origin}/${invoiceId}`);
          setOldInvoice(invoiceId);
          setLoading(false);
        } else {
          toast.error("Something went wrong.");
          setLoading(false);
        }
      }
    } catch (error) {
      toast.error("Something went wrong.");
      setLoading(false);
    }
  }
  const handleInvoiceSend = async () => {
    try {
      if (template.companyName.trim().length > 3) {
        if (template.clientEmail.includes("@gmail.com")) {
          if (!sending) {
            setSending(true);
            const data = await invoiceFormData("mail");
            data === 200 && toast.success("Invoice has been successfully sent to the client's email.");
            setSending(false);
          }
        } else {
          toast.error("Please provide the client's email to send the digital invoice.");
        }
      } else {
        toast.error("Company name is required to send the digital invoice.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
      setSending(false);
    }
  }
  return (
    <div style={themeSwitch ? theme.dark : theme.light} className={themeSwitch ? 'root --dark' : 'root'}>
      <div className="col --generator">
        <div className="header">
          <h1>Zero Invoice</h1>
          {themeSwitch ? <Sun onClick={() => { themeSwitcher(false) }} /> : <Moon onClick={() => { themeSwitcher(true) }} />}
        </div>
        <div className="data-group">
          <div className="header" onClick={() => { stepSwitcher(step === 1 ? 0 : 1) }}>
            <h2>Step 1: Company</h2>
            {step === 1 ? <Minus /> : <Plus />}
          </div>
          <div className={step === 1 ? "data-collection --open" : "data-collection"}>
            <div className="row">
              <input type="text" placeholder='Name' value={template.companyName} onChange={(e) => updateCompanyField("companyName", e.target.value)} />
              <input type="text" placeholder='Website' value={template.companyWebsite} onChange={(e) => updateCompanyField("companyWebsite", e.target.value)} />
              <input type="text" placeholder='Email' value={template.companyEmail} onChange={(e) => updateCompanyField("companyEmail", e.target.value)} />
            </div>
          </div>
        </div>
        <div className="data-group">
          <div className="header" onClick={() => { stepSwitcher(step === 2 ? 0 : 2) }}>
            <h2>Step 2: Customer</h2>
            {step === 2 ? <Minus /> : <Plus />}
          </div>
          <div className={step === 2 ? "data-collection --open" : "data-collection"}>
            <div className="row">
              <input type="text" placeholder='Name' value={template.clientName} onChange={(e) => { setTemplate((prev) => ({ ...prev, clientName: e.target.value })); }} />
              <input type="text" placeholder='Email' value={template.clientEmail} onChange={(e) => { setTemplate((prev) => ({ ...prev, clientEmail: e.target.value })) }} />
            </div>
            <div className="row">
              <input type="text" placeholder='Contact' value={template.clientContact} onChange={(e) => { setTemplate((prev) => ({ ...prev, clientContact: e.target.value })) }} />
              <input type="text" placeholder='Address' value={template.clientAddress} onChange={(e) => { setTemplate((prev) => ({ ...prev, clientAddress: e.target.value })) }} />
            </div>
          </div>
        </div>
        <div className="data-group">
          <div className="header" onClick={() => { stepSwitcher(step === 3 ? 0 : 3) }} >
            <h2>Step 3: Invoice</h2>
            {step === 3 ? <Minus /> : <Plus />}
          </div>
          <div className={step === 3 ? "data-collection --open" : "data-collection"}>
            <Description setInvoice={setInvoice} />
          </div>
        </div>
        <div className="cta-group">
          <div className="btn" onClick={handleImageDownload}><ImageDown /><span>Download Invoice</span></div>
          <div className="btn" onClick={() => { window.print() }}><Printer /><span>Print Invoice</span></div>
          {
            loading ?
              <div className="btn"><Loader /><span>Generating Link</span></div> :
              <div className="btn" onClick={handleInvoiceCopy}><Copy /><span>Invoice Link</span></div>
          }
          <div className="btn" onClick={handleInvoiceSend}>{sending ? <Loader /> : <Mail />}<span>Send Invoice</span></div>
        </div>
      </div>
      <Invoice data={invoice} template={template} ref={ref} setInvoiceId={setInvoiceId} />
    </div>
  )
}

export default page