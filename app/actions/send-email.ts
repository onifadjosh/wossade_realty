'use server'

import nodemailer from 'nodemailer';

// Define the state type for the form action
type FormState = {
  success: boolean;
  message: string;
} | null;

export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  // Validate required fields
  if (!email || !message) {
    return { 
      success: false, 
      message: 'Please provide at least your email and a message.' 
    };
  }

  // Check for required environment variables
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.error('Missing SMTP environment variables');
    return { 
      success: false, 
      message: 'Server configuration error: Missing SMTP settings. Please contact the administrator.' 
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Build recipients array and ensure all values are strings
    const recipients: string[] = [];
    const primaryContact = process.env.CONTACT_EMAIL || process.env.SMTP_USER;
    if (primaryContact) recipients.push(primaryContact);
    if (process.env.ADMIN_ACCT) recipients.push(process.env.ADMIN_ACCT);

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: recipients.length > 0 ? recipients : process.env.SMTP_USER,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
      `.trim(),
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone) || 'Not provided'}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { 
      success: true, 
      message: 'Your message has been sent successfully!' 
    };

  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    };
  }
}

// Helper function to prevent XSS attacks
function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}