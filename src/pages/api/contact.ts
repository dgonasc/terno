import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const resend = new Resend(process.env.RESEND_TOKEN);

  try {
    const { name, email, message } = req.body;

    const data = await resend.emails.send({
      from: 'contato@ternodobinga.com.br',
      to: ['rodrigo.digao000@icloud.com'],
      subject: 'Contato pelo Site',
      react: EmailTemplate({ name: name, email: email, message: message}),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
