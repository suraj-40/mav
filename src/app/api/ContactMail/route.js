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
      user: "info@av.school", 
      pass: "mwkv kkmo eqdy usrj",    
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
  `;

  try {
    const info = await transporter.sendMail({
      from: '"New Message" <info@av.school>',
      to: "info@av.school",
      subject: "New AV Queries",
      html: schoolEmailTemplate,
    });

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}