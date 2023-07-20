import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Email sent successfully
        console.log('Email sent successfully');
        } else {
          // Failed to send email
          console.error('Failed to send email');
        }
    }
    catch (error) {
      // An error occurred while sending the email
      console.error('Error:', error);
    }
  };

  return (
      <form onSubmit={handleSubmit} className='grid justify-center text-gray-700 font-xilosa'>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Nome' className='p-2 mt-3 border-2 border-yellow-200 rounded-lg w-72' />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='email' className='p-2 mt-3 border-2 border-yellow-200 rounded-lg w-72' />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder='mensagem' className='p-2 mt-3 border-2 border-yellow-200 rounded-lg h-36 w-72' />
        <button type="submit" className='mx-20 mt-4 text-white uppercase bg-gray-500 border-2 border-yellow-300 rounded-lg shadow-md shadow-gray-500'>Enviar</button>
      </form>
  )
}