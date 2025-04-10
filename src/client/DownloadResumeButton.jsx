import React from 'react';
import resumePDF from '../assets/documents/myResume.pdf';

const DownloadResumeButton = () => {

  const handleDownload = () => {
    // This will work with Webpack's file-loader
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'BarringtonKHebert_Resume.pdf'; // Customize filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:from-green-500 hover:to-blue-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      <div className="flex items-center text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        Download Resume
      </div>
    </button>
  );
};
export default DownloadResumeButton; 