
import React, { useState } from 'react';

const Resume = ({ initialCommand = '', prompt = "user@ubuntu:~$", onCommandSubmit }) => {

  const [command, setCommand] = useState(initialCommand);
  const [output, setOutput] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Fun fake directory contents
  const directoryContents = [
    "resume.pdf          (but it's actually a .txt file)",
    "skills.tar.gz      (compressed with hopes and dreams)",
    "projects/          (contains 99% node_modules)",
    "education.mkv      (4K HD, 10 hour runtime)",
    "experience.so      (dynamic library of failures)",
    "hobbies.jpg        (low resolution)",
    "references.sql     (corrupted database)",
    "contact_info.exe   (virus detected)",
    "achievements.log   (empty file)",
    "vim_skills         (DIR - just .swp files)"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!command.trim()) return;

    // Add to history
    const newHistory = [...commandHistory, command];
    setCommandHistory(newHistory);
    setHistoryIndex(newHistory.length);

    let response = `Command executed: ${command}`;
    
    // Special handling for 'ls' command
    if (command.trim() === 'ls') {
      response = (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          {directoryContents.map((file, index) => (
            <div key={index} className="text-green-300 font-mono">
              {file}
            </div>
          ))}
        </div>
      );
    } else if (command.trim() === 'ls -l') {
      // Bonus: Fancy detailed listing
      response = (
        <div className="space-y-1">
          {directoryContents.map((file, index) => (
            <div key={index} className="text-green-300 font-mono">
              -rw-r--r-- 1 user user {(index + 1) * 42}K {(new Date()).toLocaleDateString()} {file.split(' ')[0]}
            </div>
          ))}
        </div>
      );
    } else if (command.trim().startsWith('cat ')) {
      // Fun responses for trying to read files
      const file = command.split(' ')[1];
      response = `cat: ${file}: No such file or directory (but nice try!)`;
    }

    setOutput([...output, { command, response }]);
    setCommand('');
  };


  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp' && commandHistory.length > 0) {
      e.preventDefault();
      const newIndex = Math.max(historyIndex - 1, 0);
      setHistoryIndex(newIndex);
      setCommand(commandHistory[newIndex]);
    } else if (e.key === 'ArrowDown' && commandHistory.length > 0) {
      e.preventDefault();
      const newIndex = Math.min(historyIndex + 1, commandHistory.length);
      setHistoryIndex(newIndex);
      setCommand(newIndex === commandHistory.length ? '' : commandHistory[newIndex]);
    }
  };

  return (
    <div className="flex justify-center h-full">
    <div className="font-mono bg-gray-900 text-green-400 rounded-lg overflow-hidden shadow-lg w-full max-w-2xl  h-full flex flex-col">
      {/* Terminal header */}
      <div className="flex items-center bg-gray-800 px-4 py-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-2 text-gray-300 text-sm">Ubuntu Terminal</div>
      </div>
      
      {/* Terminal content */}
      <div className="p-4 overflow-y-auto flex-1">
        {/* Welcome message */}
        <div className="mb-4">
          <p>Welcome to Ubuntu 20.04.3 LTS (GNU/Linux 5.11.0-43-generic x86_64)</p>
          <p className="mt-1">Last login: {new Date().toLocaleString()}</p>
        </div>
        
        {/* Command output */}
        {output.map((item, index) => (
          <div key={index} className="mb-2">
            <div className="flex">
              <span className="text-purple-400">{prompt}</span>
              <span className="ml-2">{item.command}</span>
            </div>
            <div className="mt-1 text-gray-300">{item.response}</div>
          </div>
        ))}
        
        {/* Command input */}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-purple-400">{prompt}</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none flex-1 ml-2 text-green-400 caret-white"
            autoFocus
          />
        </form>
      </div>
    </div>
    </div>
  );
};

export default Resume;

