/* eslint-disable @typescript-eslint/ban-ts-comment */
// app/api/contact/route.js
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  console.log("running");
  const { email, subject, title, amount } = await request.json();

  console.log(title, amount);

  const transporter = nodemailer.createTransport({
    // @ts-ignore
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `Self care <${`favourejim56@gmail.com`}>`,
    secure: true,
    to: email,
    subject,
    html: `<div style="width: 100%; display: flex; padding:0px 20px; background-color: #f1f3f5; display: block;">
    <div style="max-width: 600px; width: 100%; border-radius: 10px; background-color: white; display: block; margin: 0 auto; overflow: hidden; font-size: 18px">
      <h1 style="font-size: 25px; color: white; background-color: black; width: 100%; padding: 10px 15px;">Self Care</h1>
      <div style="padding: 10px 15px;">
       <p>Hi,</p>
      <p>Thank you for purchasing this item.</p>
      <div style="padding: 20px 15px; line-height: 30px; background-color: #f1f3f5; border-radius: 10px;margin-bottom: 20px;">
        <p>Title: ${title}</p>
        <p>Amount: $${amount}</p>
         <a href="www.jimmy-dev.me" style="padding: 10px 15px; border-radius: 10px; background-color: black; color: white; text-decoration: none;">
        Access Book
      </a>
      </div>
      <p>Best regards,</p>
      <p>self care.</p>
      </div>
    </div>
  </div>`,
  };

  console.log(mailOptions);
  try {
    console.log("entered");
    await transporter.sendMail(mailOptions);
    console.log("sent");
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
