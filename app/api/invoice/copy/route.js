import db from "@/lib/db";
import invoice from "@/modal/invoice";
import { NextResponse } from "next/server";

export async function POST(req) {
    await db();
    const formdata = await req.formData();
    const id = formdata.get("id");
    const companyName = formdata.get("companyName");
    const companyEmail = formdata.get("companyEmail");
    const companyWebsite = formdata.get("companyWebsite");
    const clientName = formdata.get("clientName");
    const clientEmail = formdata.get("clientEmail");
    const clientAddress = formdata.get("clientAddress");
    const clientContact = formdata.get("clientContact");
    const invoiceData = JSON.parse(formdata.get("invoice"));
    const isExist = await invoice.countDocuments({ id });
    if (!isExist) await invoice.create({ id, companyName, companyEmail, companyWebsite, clientName, clientEmail, clientAddress, clientContact, invoice: invoiceData });
    return NextResponse.json(200);
}