import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    // NOTE: To enable real email delivery, configure a mailing service
    // (e.g. Resend, SendGrid, Nodemailer) and set the relevant environment
    // variables. Without configuration, messages are logged server-side only.
    console.log("[Contact Form Submission]", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
