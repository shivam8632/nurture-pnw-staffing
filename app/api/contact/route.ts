import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  // Parse JSON body with explicit error handling
  let body: any;
  try {
    body = await request.json();
  } catch (err: any) {
    console.error("CONTACT API ERROR: invalid JSON", err);
    return NextResponse.json(
      { message: "Invalid JSON", error: err.message },
      { status: 400 },
    );
  }

  const { firstName, lastName, email, phone, message } = body;

  // Basic validation
  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 },
    );
  }

  // Ensure Supabase env vars exist at runtime
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error("CONTACT API ERROR: missing Supabase environment variables");
    return NextResponse.json(
      { message: "Server configuration error" },
      { status: 500 },
    );
  }

  /* ------------------ SAVE TO SUPABASE ------------------ */
  const { error: dbError } = await supabase.from("contacts").insert([
    {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      message,
    },
  ]);

  if (dbError) {
    console.error("Supabase error:", dbError);
    return NextResponse.json(
      { message: "Failed to save contact", error: dbError.message },
      { status: 500 },
    );
  }

  /* ------------------ SEND EMAIL ------------------ */
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn("EMAIL_NOT_CONFIGURED: skipping email send");
    return NextResponse.json(
      { message: "Contact saved (email not configured)" },
      { status: 200 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Nurture PNW Staffing" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Quote Request from Nurture PNW Staffing",
      text: `
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
    });
  } catch (err: any) {
    console.error("EMAIL SEND ERROR:", err);
    return NextResponse.json(
      {
        message: "Contact saved, but failed to send email",
        error: err.message,
      },
      { status: 200 },
    );
  }

  return NextResponse.json(
    { message: "Contact saved & email sent successfully" },
    { status: 200 },
  );
}
