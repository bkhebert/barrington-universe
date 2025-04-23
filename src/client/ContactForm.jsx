import React, {useState} from "react";

import emailjs from 'emailjs-com';

const ContactForm = ({toggleFormView}) => {

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

  const exitForm = () => {
    toggleFormView(false);
  }
  return (

      <div className="fixed inset-0 z-20 flex justify-center mt-[200px] bg-black/10 backdrop-blur-sm w-full h-[300px] max-w-[600px] mx-auto ">
      <form 
        onSubmit={handleSubmit}
        className=" mb-2  bg-neutral-300 shadow-xl rounded p-4 w-full z-50 flex justify-center flex-col gap-2"
      ><div className="flex">
        <button 
        onClick={exitForm}
          type="button"
          className="w-[30px] bg-red-500 text-white py-1 rounded hover:bg-red-700 text-sm"
        >X</button>
        <h1 className="text-center text-black font-semibold text-lg mx-auto">Get in touch with me directly!</h1>
        </div>
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

export default ContactForm;