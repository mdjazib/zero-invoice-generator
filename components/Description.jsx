"use client"
import { Plus, X } from 'lucide-react'
import React, { useState } from 'react'

const Description = () => {
    const [items, setItems] = useState([]);
    return (
        <>
            <div className="row">
                <input type="text" placeholder='Description' />
                <input type="number" placeholder='Qty' />
                <input type="number" placeholder='Price' />
                <div className="btn" onClick={() => { setItems(prev => [...prev, ""]) }}><Plus /></div>
            </div>
            {
                items.map((_, e) => (
                    <div key={e} className="row">
                        <input type="text" placeholder='Description' />
                        <input type="number" placeholder='Qty' />
                        <input type="number" placeholder='Price' />
                        <div className="btn" onClick={() => {
                            const copy = [...items];
                            copy.splice(e, 1);
                            setItems(copy);
                        }} ><X /></div>
                    </div>
                ))
            }
        </>
    )
}

export default Description