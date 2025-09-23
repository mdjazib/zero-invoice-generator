import db from "@/lib/db";
import invoice from "@/modal/invoice";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    await db();
    const { id } = await params;
    return NextResponse.json(await invoice.findOne({ id }));
}