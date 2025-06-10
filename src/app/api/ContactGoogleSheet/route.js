import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
    const body = await req.json();
    const {
        firstName,
        lastName,
        phone,
        query,
        message
    } = body;

    try {
       
        const endpoint ="https://script.google.com/macros/s/AKfycbyMmW5Xx-DWwXUMr4Ve2B-Kwexw300Aik3Y2maRUCtc3Bc_GuSOuLWRkxP-Yd4EOmY2xA/exec"
             
        const now = new Date();

        const date = now.toLocaleDateString("en-GB", {
        timeZone: "Asia/Kolkata",
        }); // e.g., "27/05/2025"

        const time = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour12: true,
        }); // e.g., "10:45:12 AM"

        const submittedAt = `${date} ${time}`;

        const dataToSend = {
        submittedAt,
        ...body,
        };

        await axios.post(endpoint, dataToSend);
       
           return NextResponse.json({ message: "google sheets updated" }, { status: 200 });
        
       } catch (error) {
           console.log("Error:", error);
           
           return NextResponse.json({ message: "google sheets not updated" }, { status: 400 });
       }
}