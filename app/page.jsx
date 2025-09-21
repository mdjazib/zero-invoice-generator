"use client"
import Description from '@/components/Description'
import Invoice from '@/components/Invoice'
import { Copy, FileDown, ImageDown, Minus, Moon, Plus, Printer, Send, Share2, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [themeSwitch, setThemeSwitch] = useState(false);
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
  }, []);
  const themeSwitcher = (theme) => {
    localStorage.setItem("zero-ig-theme", theme);
    setThemeSwitch(theme);
  }
  const stepSwitcher = (step) => {
    setStep(step);
  }
  return (
    <div style={themeSwitch ? theme.dark : theme.light} className={themeSwitch ? 'root --dark' : 'root'}>
      <div className="col --generator">
        <div className="header">
          <h1>Zero Invoice Generator</h1>
          {themeSwitch ? <Sun onClick={() => { themeSwitcher(false) }} /> : <Moon onClick={() => { themeSwitcher(true) }} />}
        </div>
        <div className="data-group">
          <div className="header" onClick={() => { stepSwitcher(step === 1 ? 0 : 1) }}>
            <h2>Step 1: Company</h2>
            {step === 1 ? <Minus /> : <Plus />}
          </div>
          <div className={step === 1 ? "data-collection --open" : "data-collection"}>
            <div className="row">
              <input type="text" placeholder='Name' />
              <input type="text" placeholder='Website' />
              <input type="text" placeholder='Email' />
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
              <input type="text" placeholder='Name' />
              <input type="text" placeholder='Email' />
            </div>
            <div className="row">
              <input type="text" placeholder='Contact' />
              <input type="text" placeholder='Address' />
            </div>
          </div>
        </div>
        <div className="data-group">
          <div className="header" onClick={() => { stepSwitcher(step === 3 ? 0 : 3) }} >
            <h2>Step 3: Invoice</h2>
            {step === 3 ? <Minus /> : <Plus />}
          </div>
          <div className={step === 3 ? "data-collection --open" : "data-collection"}>
            <Description />
          </div>
        </div>
        <div className="cta-group">
          <div className="btn"><Printer /><span>Print</span></div>
          <div className="btn"><FileDown /><span>Download PDF</span></div>
          <div className="btn"><ImageDown /><span>Download Image</span></div>
          <div className="btn"><Copy /><span>Copy link</span></div>
          <div className="btn"><Send /><span>Send email</span></div>
          <div className="btn"><Share2 /><span>Share on WhatsApp</span></div>
        </div>
      </div>
      <Invoice />
    </div>
  )
}

export default page