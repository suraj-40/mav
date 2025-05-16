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

  const studentEmailTemplate = (
    fatherName,
    motherName,
    childName,
    date,
    selectedTime,
    address,
    phone,
    email,
    link
  ) => `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 5px; border-radius: 8px; margin: auto;">
     <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
      <tr>
        <td align="left" style="padding: 10px;">
          <table width="200" height="100" cellspacing="0" cellpadding="0" border="0" style="background-image: url('https://res.cloudinary.com/dpv2jcm1c/image/upload/v1747049003/logo_1_fqzip3.png'); background-size: contain; background-repeat: no-repeat; background-position: left;">
            <tr><td>&nbsp;</td></tr>
          </table>
        </td>
      </tr>
     </table>
      <h2 style="color: #222;">Dear ${fatherName} and ${motherName},</h2>
  
      <p style="text-align: justify;">
        Thank you for confirming your campus visit to <strong>Agasthya Vidyaniketan</strong> as a potential learning home for <strong>${childName}</strong>. 
        We look forward to welcoming you on campus and introducing you to our core values, unique educational approach, experienced and dedicated teachers, 
        and holistic spaces that define our school community.
      </p>
  
      <p><strong>Your visit has been scheduled as follows:</strong></p>
      <ul style="list-style: none; padding-left: 0;">
        <li>📅 <strong>Date:</strong> ${date}</li>
        <li>⏰ <strong>Time:</strong> ${selectedTime}</li>
        <li>📍 <strong>Location:</strong> <a href="${link}" style="color: #0066cc;">${address}</a></li>
      </ul>
  
      <h3 style="margin-top: 25px; color: #444;">What to Expect During Your Visit</h3>
      <p style="text-align: justify;">
        We’ve curated a guided experience to help you explore what makes AV School a nurturing and future-ready learning environment for <strong>${childName}</strong>:
      </p>
      <ul style="padding-left: 20px;">
        <li>✅ Classroom Walkthrough</li>
        <li>✅ Faculty Interactions</li>
        <li>✅ Academic Philosophy</li>
        <li>✅ Q&A Sessions</li>
      </ul>
  
      <p style="text-align: justify;">
        At Agasthya Vidyaniketan, we are dedicated to empowering every student with the knowledge, skills, and values needed to thrive in a future-focused world. 
        We encourage you to come prepared with any questions or topics you’d like to discuss to make the most of your visit.
      </p>
  
      <p style="text-align: justify;">
        Need to adjust your appointment or have pre-visit questions?
        Feel free to reach out to our admissions team at <strong>${phone}</strong> or <a href="mailto:${email}" style="color: #0066cc;">${email}</a>.
      </p>
  
      <!-- Bottom image with table for compatibility -->
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
        <tr>
          <td align="center" style="background-image: url('https://res.cloudinary.com/dpv2jcm1c/image/upload/v1747384275/AV_sj12ct.png'); background-size: contain; background-repeat: no-repeat; background-position: center; width: 100%; height: 300px;">
            &nbsp;
          </td>
        </tr>
      </table>
  
      <p style="text-align: justify;">
        We look forward to welcoming your family to AV School on <strong>${date}</strong> and sharing how our educational approach can support <strong>${childName}</strong>'s development.
      </p>
  
      <p style="margin-top: 30px;">
        With warm anticipation,<br/>
        <strong>Team AV School</strong>
      </p>
  
      <p style="line-height: 1.6; font-size: 14px;">
        📍 <a href="${link}" style="color: #0066cc;">${address}</a><br/>
        📞 ${phone}<br/>
        📧 <a href="mailto:${email}" style="color: #0066cc;">${email}</a><br/>
        🌐 <a href="https://www.av.school" style="color: #0066cc;">https://www.av.school</a>
      </p>
    </div>
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
        subject: `Campus Visit Confirmed — See You on ${date}, ${selectedTime}`,
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
