import { useState } from 'react';
import toast from 'react-hot-toast';

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
    <form onSubmit={handleSubmit} className='grid items-center justify-center mb-20 text-gray-700 font-xilosa'>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder='Nome'
        className='p-2 mt-3 border-2 border-yellow-200 rounded-lg w-72'
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder='email'
        className='p-2 mt-3 border-2 border-yellow-200 rounded-lg w-72'
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder='mensagem'
        className='p-2 mt-3 border-2 border-yellow-200 rounded-lg h-36 w-72'
      />
      <button type="submit" className='mx-20 mt-4 text-white uppercase bg-gray-400 border-2 border-yellow-300 rounded-lg shadow-md shadow-gray-500'>Enviar</button>
    </form>
  )
}
