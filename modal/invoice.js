import mongoose, { Schema } from "mongoose";

const invoiceSchema = new Schema(
    {
        id: Number,
        companyName: String,
        companyEmail: String,
        companyWebsite: String,
        clientName: String,
        clientAddress: String,
        clientEmail: String,
        clientContact: String,
        invoice: Array
    }, { timestamps: true }
)

export default mongoose.models.invoice || mongoose.model("invoice", invoiceSchema);