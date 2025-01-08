import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { EmailTemplate } from './../../_components/email-template'; // Adjust the path if necessary

const resend = new Resend(process.env.RESEND_API_KEY);

// Define a named export for POST requests
export async function POST(req: Request) {
  try {
    // Parse the request body only once
    const response = await req.json();
    console.log(response)
    console.log("hi")
    const { to = 'default@example.com', subject = 'Welcome John', firstName = 'John', userName } = response;

    // Send email using Resend
    const data = await resend.emails.send({
        from: 'Acme <noreply@ayushpanweb.com>',
        to: [response.emailToSend],
        subject: response?.userName+" Shared file with you",
        react: EmailTemplate({ response }),
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

