import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend'; 

const resend = new Resend('re_9agAoK19_AFz4wQj6ZNCejb2UwFkfCtrR');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, message } = req.body;

    const data = await resend.emails.send({
      from: 'contato@ternodobinga.com.br',
      to: ['ternodobinga@gmail.com'],
      subject: 'Contato pelo Site',
      react: EmailTemplate({ name: name, email: email, message: message}),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};