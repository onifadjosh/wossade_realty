'use server'

import nodemailer from 'nodemailer';

export async function sendEmail(prevState: any, formData: FormData) {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  if (!email || !message) {
    return { success: false, message: 'Please provide at least your email and a message.' };
  }

  // Check for required environment variables
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.error('Missing SMTP environment variables');
    // In a real scenario, you might want to log this but show a generic error to the user
    // returning mock success for demonstration if envs are missing to avoid breaking UI flow for user without keys
    // BUT user specifically asked for functionality. I will return error to prompt them to configure.
    return { 
        success: false, 
        message: 'Server configuration error: Missing SMTP settings. Please contact the administrator.' 
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for others
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER, // sender address
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // list of receivers
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Your message has been sent successfully!' };

  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send message. Please try again later.' };
  }
}
