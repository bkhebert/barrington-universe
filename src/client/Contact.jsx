import React, { useState, useEffect } from 'react';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaFileAlt } from '@react-icons/all-files/fa/FaFileAlt';
const Contact = (toggleFormView) => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {

    toggleFormView(showForm);

  }, [showForm])

  return (
    <>
  <div className="flex gap-4 items-center justify-center relative bg-raccoon-primary/50 p-4 rounded mb-6 ml-2 mr-2">
      <a href="https://www.linkedin.com/in/bkhebert" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-7xl text-blue-400 hover:scale-110 transition-transform" />
      </a>

      <button onClick={() => setShowForm(!showForm)}>
        <FaEnvelope className="text-7xl text-red-300 hover:scale-110 transition-transform" />
      </button>

      <a href="https://github.com/bkhebert" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-7xl text-slate-300 hover:scale-110 transition-transform" />
      </a>

      <a href="https://www.linkedin.com/in/bkhebert/overlay/1743177671333/single-media-viewer/?type=DOCUMENT&profileId=ACoAAC1btlMBebWcACgShEtDcSBt-HMlIWrwFVQ" target="_blank" rel="noopener noreferrer">
        <FaFileAlt className="text-7xl text-green-500 hover:scale-110 transition-transform" />
      </a>

   
    </div>
</>
  );
};

export default Contact;
