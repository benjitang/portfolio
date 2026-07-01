'use server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (email: string, subject: string, html: string) => {
  return resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: subject,
    html: html,
  });
};

export const sendContactEmail = async (
  name: string,
  email: string,
  message: string
) => {
  const html = `
    <div>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    </div>
  `;

  return resend.emails.send({
    from: 'onboarding@resend.dev',
    to: process.env.CONTACT_EMAIL as string, // your inbox, set in .env.local
    replyTo: email,
    subject: `New message from ${name}`,
    html,
  });
};