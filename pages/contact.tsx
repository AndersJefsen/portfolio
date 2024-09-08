import React, { useState } from 'react';
import Navbar from '../components/Navbar.client';
import Layout from '@/app/layout';
import './contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSedY8fyPwRxbtfYmfaraIs8zfLkfvgixrOi7jOSHPCpB-dccA/formResponse';
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('entry.1216265129',formData.name)
    formDataToSubmit.append('entry.513589043',formData.email)
    formDataToSubmit.append('entry.1427811156',formData.message)

    try{
      await fetch(formUrl, {
        method:'POST',
        body: formDataToSubmit,
        mode: 'no-cors'
      });
      alert('Form submitted successfully:');
    }
    catch(error){
      console.error('Error submitting form:', error)
      alert('Failed to submit form')
    }
  };

  return (
    <Layout>
      <div className='contact-container'>
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name" 
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
               />
          </div>
          <div className='form-group'>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
               />
          </div>
          <div className='form-group'>
            <label htmlFor="message">Message</label>
            <textarea 
              name="message" 
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
               />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div> 
    </Layout>
  );
};

export default Contact;
