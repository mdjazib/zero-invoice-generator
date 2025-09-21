"use client";
import { Plus, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const Description = ({ setInvoice }) => {
    const [items, setItems] = useState([{ name: "", qty: 1, price: 0 }]);

    useEffect(() => {
        setInvoice(items);
    }, [items, setInvoice]);

    const handleChange = (index, field, value) => {
        setItems((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, [field]: value } : item
            )
        );
    };

    const addItem = () => {
        setItems((prev) => [...prev, { name: "", qty: 1, price: 0 }]);
    };

    const removeItem = (index) => {
        setItems((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <>
            {items.map((item, i) => (
                <div key={i} className="row">
                    <input
                        type="text"
                        placeholder="Description"
                        value={item.name}
                        onChange={(e) => handleChange(i, "name", e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Qty"
                        value={item.qty}
                        onChange={(e) =>
                            handleChange(
                                i,
                                "qty",
                                e.target.value === "" ? "" : Number(e.target.value)
                            )
                        }

                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={item.price}
                        onChange={(e) =>
                            handleChange(
                                i,
                                "price",
                                e.target.value === "" ? "" : Number(e.target.value)
                            )
                        }
                    />
                    {i === 0 ? (
                        <button className="btn" onClick={addItem}>
                            <Plus />
                        </button>
                    ) : (
                        <button className="btn" onClick={() => removeItem(i)}>
                            <X />
                        </button>
                    )}
                </div>
            ))}
        </>
    );
};

export default Description;
