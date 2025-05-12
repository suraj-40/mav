import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import Image from "next/image";
import logoImage from "@/assets/images/logo/logo_2.png";

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
      selectedTime,
  } = body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "sharath.kr@abc.courses",    //change personal email to school email
      pass: "vzot jaxd ogln ofid",       //change app password
    },
  });

  // const studentEmailTemplate = (childName, date) => `
  //   <h2>Hello ${childName},</h2>
  //   <p>Thank you for scheduling your school visit on <strong>${date}</strong>.</p>
  //   <p>Please arrive 10 minutes early and bring a valid ID.</p>
  //   <br/>
  //   <p>Best regards,<br/>Agasthya Vidhyanikethan</p>
  // `;

  const studentEmailTemplate = (fatherName, motherName, childName, date, selectedTime, address, phone, email, link) => `
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
  <tr>
    <td align="center">
      <img src=" https://res.cloudinary.com/dpv2jcm1c/image/upload/v1747049003/logo_1_fqzip3.png"
           style="max-width: 600px; width: 60%; height: auto; display: block;" 
           alt="Logo" />
    </td>
  </tr>
</table>

  <h2>Dear ${fatherName} and ${motherName}</h2>

  <p>Thank you!</p>
  <p>We appreciate your interest in AV School for <strong>${childName}</strong>'s education. We're delighted to be part of your school selection process.</p>

  <p><strong>Your campus visit is confirmed for:</strong></p>
  <ul>
    <li>📅 <strong>Date:</strong> ${date}</li>
    <li>⏰ <strong>Time:</strong> ${selectedTime}</li>
    <li>📍 <strong>Location:</strong><a href="${link}">${address}</a></li>
  </ul>

  <p>Upon arrival, our welcoming staff will greet you at our reception area.</p>

  <p>
    For a comprehensive experience, we have designed a structured visit to showcase how Agasthya Vidyaniketan's distinctive learning environment helps <strong>${childName}</strong> grow with confidence and succeed both in school and beyond.
  </p>

  <p><strong>Your Exclusive Campus Experience Includes:</strong></p>
  <ul>
    <li>✅ Classroom Tour - Witness our innovative learning spaces in action</li>
    <li>✅ Meet Our Teachers - Brief interactions with our highly qualified & experienced educators</li>
    <li>✅ Teaching Methodologies - Observe our unique educational approach</li>
    <li>✅ Personalized Q&A Session - Address your specific questions/concerns about <strong>${childName}</strong>'s education</li>
  </ul>

  <p>
    Need to adjust your appointment or have pre-visit questions?<br/>
    Our dedicated admissions team is standing by at <strong>${phone}</strong> or <a href="mailto:${email}">${email}</a>.
  </p>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
  <tr>
    <td align="center">
      <img src="https://res.cloudinary.com/dpv2jcm1c/image/upload/v1747045900/email-image_r4gn4t.jpg"
           style="max-width: 600px; width: 100%; height: auto; display: block;" 
           alt="Logo" />
    </td>
  </tr>
  </table>
  <p>
    We look forward to welcoming your family to AV School on <strong>${date}</strong> and sharing how our educational approach can support <strong>${childName}</strong>'s development.
  </p>

  <p>With warm anticipation,<br/><strong>The Admissions Team<br/>AV School</strong></p>

  <p>
    📍 <a href="${link}">${address}</a><br/>
    📞 ${phone}<br/>
    📧 <a href="mailto:${email}">${email}</a><br/>
    🌐 <a href="https://www.av.school">https://www.av.school</a>
  </p>
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
    <p><strong>Scheduled Visit Time: </strong> ${selectedTime}</p>
    <br/>
    <p>System Notification - LMS</p>
  `;

  try {
    if (parentEmail) {
      let email, phone, address, link;

      if (branch === "AV Ullal") {
        email = "info@av.school";
        phone = "7760776098 | 7760776046";
        address = "#170/3, 6th block, Sir M. Vishweshwaraiah Layout, Ullal Ring road, Bengaluru-560110";
        link="https://maps.app.goo.gl/Xe6HM1q4uXFXi59J6"
      } else {
        email = "info@av.school";
        phone = "9880906633 | 9972342144";
        address = "# 1566, 'D' Group Layout, 60 ft. Road, Near 2nd Water Tank, Srigandhakaval, Bengaluru - 560091. Landmark: Nagarabhavi Ring Road   ";
        link="https://maps.app.goo.gl/h7nNTso9x3Eag8oW8"
      }
      const info1 = await transporter.sendMail({
        from: '"Agasthya Vidhyanikethan" <info@av.school>', // updated to school email
        to: parentEmail,
        subject: `Your AV School Visit Confirmed: ${date}, ${selectedTime}`,
        html: studentEmailTemplate(fatherName, motherName, childName, date, selectedTime, address, phone, email, link),
      });
    }    

    const info2 = await transporter.sendMail({
      from: '"Agasthya Vidhyanikethan" <sharath.kr@abc.courses>',  //change personal email to school email
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
