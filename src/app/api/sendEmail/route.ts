import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { fname, email, phone, date } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        // user: "salmanamjad902@gmail.com",
        // pass: "cnez szon gozh motb",
      },
    });

    // Email options for sending to your own inbox
    const mailOptionToYou = {
      from: email,
      to: "salmanamjad902@gmail.com",
      subject: " Contact Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <ul>
          <li>First Name: ${fname}</li>
          <li>Email: ${email}</li> 
          <li>Number: ${phone}</li> 
          <li>Message: ${date}</li> 
        </ul>
      `,
    };

    // Email options for sending thank you email to the user
    const mailOptionToUser = {
      // from: "BULK BROTHERS <salmanamjad902@gmail.com>",

      to: email,
      subject: "Thank You for Contacting Us",
      html: `
        <h3>Dear ${fname},</h3>
        <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,</p>
        <p>BULK BROTHERS,</p>
      `,
    };

    // Send emails
    await transporter.sendMail(mailOptionToYou);
    await transporter.sendMail(mailOptionToUser);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
