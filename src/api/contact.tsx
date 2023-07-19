import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter using your email service provider's SMTP configuration
    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: 'ternodobinga@gmail.com',
        pass: 'bingameuboi',
      },
      secure: true,
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: 'ternodobinga@gmail.com',
        to: 'ternodobinga@gmail.com',
        subject: 'New contact form submission',
        text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
      });

      // Email sent successfully
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      // An error occurred while sending the email
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    // Only handle POST requests
    res.status(405).end();
  }
}
