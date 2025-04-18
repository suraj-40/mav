import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const {
      childName,
      parentEmail,
      fatherName,
      fatherContact,
      motherName,
      motherContact,
      dateOfBirth,
      nationality,
      branch,
      admissionClass,
      gender,
      lastSchool,     
      acceptPolicy,
      date,
  } = body;

  console.log(fatherName)

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "jeevan.raj@abc.courses", 
      pass: "ojbe ynss ufta dnme",    
    },
  });

  const studentEmailTemplate = (childName, date) => `
    <h2>Hello ${childName},</h2>
    <p>Thank you for scheduling your school visit on <strong>${date}</strong>.</p>
    <p>Please arrive 10 minutes early and bring a valid ID.</p>
    <br/>
    <p>Best regards,<br/>Agasthya Vidhyanikethan</p>
  `;

  const schoolEmailTemplate = `
    <h2>New Student Visit Scheduled</h2>
    <p><strong>Student Name: </strong> ${childName}</p>
    <p><strong>Parent Email: </strong> ${parentEmail}</p>
    <p><strong>Father Name: </strong> ${fatherName}</p>
    <p><strong>Father Contact Number: </strong> ${fatherContact}</p>
    <p><strong>Mother Name: </strong> ${motherName}</p>
    <p><strong>Mother Contact Number: </strong> ${motherContact}</p>
    <p><strong>Date Of Birth: </strong> ${dateOfBirth}</p>
    <p><strong>Nationality: </strong> ${nationality}</p>
    <p><strong>Branch Selected: </strong> ${branch}</p>
    <p><strong>Admission Class: </strong> ${admissionClass}</p>
    <p><strong>Gender: </strong> ${gender}</p>
    <p><strong>Last Attended School: </strong> ${lastSchool}</p>
    <p><strong>Scheduled Visit Date: </strong> ${date}</p>
    <br/>
    <p>System Notification - LMS</p>
  `;

  try {
    const info1 = await transporter.sendMail({
      from: '"Your LMS Platform" <jeevan.raj@abc.courses>',
      to: parentEmail,
      subject: "Your School Visit Confirmation",
      html: studentEmailTemplate(childName, date),
    });

    const info2 = await transporter.sendMail({
      from: '"Your LMS Platform" <jeevan.raj@abc.courses>',
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
