import { useState } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const initialFormData: FormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Email sent successfully
        toast.success('E-mail enviado!');

        // Clear the form fields after successful submission
        setFormData(initialFormData);
      } else {
        // Failed to send email
        toast.error("This didn't work.")
      }
    } catch (error) {
      // An error occurred while sending the email
      console.error('Error:', error);
    }
  };

  return (
    <div className="grid items-center justify-center sm:flex">
      <div className='grid justify-center text-center'>
        <div className="grid text-gray-600 font-xilosa">
          <h2 className="text-2xl">Contato</h2>
          <h3>ternodobinga@gmail.com</h3>
        </div>
        <form onSubmit={handleSubmit} className='grid items-center justify-center mb-20 text-gray-700 font-xilosa'>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Nome'
            className='p-2 mt-3 border-2 border-yellow-200 rounded-lg placeholder:opacity-70 w-72 border-opacity-60'
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='E-mail'
            className='p-2 mt-3 border-2 border-yellow-200 rounded-lg placeholder:opacity-70 w-72 border-opacity-60'
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Mensagem'
            className='p-2 mt-3 border-2 border-yellow-200 rounded-lg h-36 w-72 border-opacity-60 placeholder:opacity-70'
          />
          <button type="submit" className='mx-20 mt-4 text-white uppercase bg-gray-400 border-2 border-yellow-300 rounded-lg border-opacity-80'>Enviar</button>
        </form>
      </div>
      <div>
        <Image
          src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BingaSol_2.png"
          alt="Binga e o Sol"
          width={300}
          height={200}
          className="w-full mb-20 ml-12 max-lg:ml-2 max-lg:justify-center opacity-70 drop-shadow-2xl"
        />
      </div>
    </div>
  )
}
