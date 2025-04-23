import React from "react";

import emailjs from 'emailjs-com';

const ContactForm = (toggleFormView) => {

  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_97tsql9',               
      'template_1xlad7e',             
      e.target,
      'xAqbTZ4pl87gY-dxJ'             
    ).then(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => {
        setFormStatus(null);
        toggleFormView(false);
      }, 2500);
    }).catch(() => {
      setFormStatus('error');
    });
  };

  return (

      <div className="flex md:justify-center md:contents-center mb-[300px] z-25">
      <form 
        onSubmit={handleSubmit}
        className="absolute top-1/2 mb-6 bg-neutral-300 shadow-xl rounded p-4 w-full z-10 flex flex-col gap-2 md:w-3/4"
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
          className="w-full bg-raccoon-primary text-white py-1 rounded hover:bg-indigo-600 text-sm"
        >
          Send
        </button>
        {formStatus === 'success' && <p className="text-green-600 text-sm">Message sent!</p>}
        {formStatus === 'error' && <p className="text-red-600 text-sm">Something went wrong.</p>}
      </form>
      </div>
  )
}
