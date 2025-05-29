import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  try {
    const endpoint = "https://script.google.com/macros/s/AKfycbx8lvoDlxGdFWNslENhJ7I2ruZUU13Rxv_8QuHb7NG4M29ysSveffuYdJRwk08xjcti/exec";

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

    return NextResponse.json({ message: "Google Sheets updated" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Google Sheets not updated" }, { status: 400 });
  }
}






