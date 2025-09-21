import { Plus, X } from 'lucide-react'
import React from 'react'

const Description = () => {
    return (
        <>
            <div className="row">
                <input type="text" placeholder='Description' />
                <input type="number" placeholder='Qty' />
                <input type="number" placeholder='Price' />
                <div className="btn"><Plus /></div>
            </div>
            <div className="row">
                <input type="text" placeholder='Description' />
                <input type="number" placeholder='Qty' />
                <input type="number" placeholder='Price' />
                <div className="btn"><X /></div>
            </div>
            <div className="row">
                <input type="text" placeholder='Description' />
                <input type="number" placeholder='Qty' />
                <input type="number" placeholder='Price' />
                <div className="btn"><X /></div>
            </div>
            <div className="row">
                <input type="text" placeholder='Description' />
                <input type="number" placeholder='Qty' />
                <input type="number" placeholder='Price' />
                <div className="btn"><X /></div>
            </div>
            <div className="row">
                <input type="text" placeholder='Description' />
                <input type="number" placeholder='Qty' />
                <input type="number" placeholder='Price' />
                <div className="btn"><X /></div>
            </div>
            <div className="row">
                <input type="text" placeholder='Description' />
                <input type="number" placeholder='Qty' />
                <input type="number" placeholder='Price' />
                <div className="btn"><X /></div>
            </div>
        </>
    )
}

export default Description