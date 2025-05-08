import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const {
        firstName,
        lastName,
        phone,
        query,
        message,
  } = body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "sharath.kr@abc.courses", 
      pass: "vzot jaxd ogln ofid",    
    },
  });
 

  const schoolEmailTemplate = `
    <h2>New Message Notification</h2>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Parent Contact:</strong> ${phone}</p>
    <p><strong>Query Title:</strong> ${query}</p>
    <p><strong>Message:</strong> ${message}</p>
    <br/>
    <p>System Notification - LMS</p>
  `;

  try {
    const info = await transporter.sendMail({
      from: '"New Message" <sharath.kr@abc.courses>',
      to: "sharath.kr@abc.courses",
      subject: "New Student Visit Scheduled",
      html: schoolEmailTemplate,
    });

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}