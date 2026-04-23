import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name) {
      return NextResponse.json({ error: " Name is required" }, { status: 400 });
    }
    if (!email) {
      return NextResponse.json(
        { error: " Email is required" },
        { status: 400 }
      );
    }
    if (!message) {
      return NextResponse.json(
        { error: " Messages are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL}>`,
      ReplyTo: email,
      to: process.env.EMAIL,
      subject: `📩 ${name} sent you a message`,
      html: `
  <div style="font-family:Arial, sans-serif; background-color:#f4f4f4; padding:20px;">
    
    <table align="center" width="100%" max-width="600px" 
      style="background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <tr>
        <td style="background:#4f46e5; color:#ffffff; padding:20px; text-align:center;">
          <h2 style="margin:0;">📬 New Contact Message</h2>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:20px; color:#333;">
          
          <p style="font-size:16px;">You have received a new message from your portfolio website:</p>

          <table width="100%" style="margin-top:15px;">
            <tr>
              <td style="font-weight:bold; padding:8px 0;">Name:</td>
              <td>${name}</td>
            </tr>
            <tr>
              <td style="font-weight:bold; padding:8px 0;">Email:</td>
              <td>${email}</td>
            </tr>
            <tr>
              <td style="font-weight:bold; padding:8px 0;">Message:</td>
              <td>${message}</td>
            </tr>
          </table>

        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background: #f9fafb; text-align: center; padding: 15px; font-size: 12px; color: #777;">
          © ${new Date().getFullYear()} Your Portfolio | All Rights Reserved
        </td>
      </tr>

    </table>
  </div>
  `,
    });

    await transporter.sendMail({
      from: `"Krish Sharma" <${process.env.EMAIL}>`,
      to: email,
      subject: "Thanks for reaching out 🙌",
      html: `
  <div style="font-family:Arial,sans-serif; background:#f4f4f4; padding:20px;">
    
    <table align="center" width="100%" style="max-width:600px; background:#fff; border-radius:10px; overflow:hidden;">
      
      <!-- Header -->
      <tr>
        <td style="background:#4f46e5; color:#fff; text-align:center; padding:20px;">
          <h2 style="margin:0;">Thank You 🚀</h2>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:20px; color:#333;">
          <p>Hi <strong>${name}</strong>,</p>

          <p>Thanks for contacting me through my portfolio website. I’ve received your message and will get back to you as soon as possible.</p>

          <p style="margin-top:15px;">Meanwhile, feel free to check my projects or connect with me.</p>

          <div style="margin-top:20px; text-align:center;">
            <a href="#" 
            style="background:#4f46e5; color:#fff; padding:10px 15px; text-decoration:none; border-radius:5px;">
              Visit Portfolio
            </a>
          </div>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="text-align:center; padding:15px; font-size:12px; color:#777;">
          © ${new Date().getFullYear()} Krish Sharma
        </td>
      </tr>

    </table>
  </div>
  `,
    });

    console.log("Message sent:", info.messageId);

    if (info.rejected.length > 0) {
      console.warn("Some recipients were rejected:", info.rejected);
    }

    const formData = {
      name,
      email,
      message,
    };
    return NextResponse.json(
      { message: "Message received successfully", formData },
      { status: 200 }
    );
  } catch (err: any) {
    switch (err.code) {
      case "ECONNECTION":
      case "ETIMEDOUT":
        console.error("Network error - retry later:", err.message);
        break;
      case "EAUTH":
        console.error("Authentication failed:", err.message);
        break;
      case "EENVELOPE":
        console.error("Invalid recipients:", err.rejected);
        break;
      default:
        console.error("Send failed:", err.message);
    }
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
