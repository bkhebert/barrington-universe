import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope, FaGithub, FaFileAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_97tsql9',               // ✅ Your EmailJS Service ID
      'template_1xlad7e',             // ❗ Replace with your actual template ID from EmailJS
      e.target,
      'xAqbTZ4pl87gY-dxJ'             // ✅ Your EmailJS Public Key
    ).then(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => {
        setFormStatus(null);
        setShowForm(false);
      }, 2500);
    }).catch(() => {
      setFormStatus('error');
    });
  };

  return (
    <div className="flex gap-4 items-center justify-center relative">
      <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-2xl text-blue-600 hover:scale-110 transition-transform" />
      </a>

      <button onClick={() => setShowForm(!showForm)}>
        <FaEnvelope className="text-2xl text-red-500 hover:scale-110 transition-transform" />
      </button>

      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-2xl text-gray-800 hover:scale-110 transition-transform" />
      </a>

      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <FaFileAlt className="text-2xl text-green-600 hover:scale-110 transition-transform" />
      </a>

      {showForm && (
        <form 
          onSubmit={handleSubmit}
          className="absolute top-full mt-2 bg-white shadow-xl rounded p-4 w-72 z-10 flex flex-col gap-2"
        >
          <input 
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full p-2 border rounded text-sm"
            required
          />
             <input 
            type="text"
            name="email"
            placeholder="Your email"
            className="w-full p-2 border rounded text-sm"
            required
          />
          <textarea 
            name="message"
            placeholder="Your message"
            rows="3"
            className="w-full p-2 border rounded text-sm"
            required
          />
          <button 
            type="submit"
            className="w-full bg-indigo-500 text-white py-1 rounded hover:bg-indigo-600 text-sm"
          >
            Send
          </button>
          {formStatus === 'success' && <p className="text-green-600 text-sm">Message sent!</p>}
          {formStatus === 'error' && <p className="text-red-600 text-sm">Something went wrong.</p>}
        </form>
      )}
    </div>
  );
};

export default Contact;
