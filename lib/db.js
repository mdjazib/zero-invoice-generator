import mongoose from "mongoose";
export default async function db() { if (mongoose.connection.readyState === 0) await mongoose.connect(process.env.MONGO_URI) };