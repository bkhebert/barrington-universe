
import React, { useState, useRef, useEffect, lazy, Suspense } from 'react';
const Education = lazy(() => import('./Education'));
import Experience from './Experience';
import DownloadResumeButton from './DownloadResumeButton';
import { initPopovers } from 'flowbite';

const Resume = ({ initialCommand = '', prompt = "bkhebert@ubuntu:~$", onCommandSubmit, handleClick }) => {

  const [command, setCommand] = useState(initialCommand);
  const [output, setOutput] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [educationClicked, setEducationClicked] = useState(false);
  const [experienceClicked, setExperienceClicked] = useState(true);
  const terminalContentRef = useRef(null);
  const [maxH, setMaxH] = useState("max-h-[90vh]");
  const [maxW, setMaxW] = useState("max-w-2xl");
  



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

  useEffect(() => {
    initPopovers();
  }, []);


  const scrollToTop = () => {
    terminalContentRef.current.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() =>{
    scrollToTop()
  }, [])
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
    } else if (command.trim() === 'sudo rm -rf') {
      response = (
        <div className="text-red-300 font-mono">
          <p>🔥 BOOM! 🔥</p>
          <p>📛 Warning: Resume about to go Ultra Instinct</p>
          <p>🫠 Files leaving like Naruto on a swing set. But it's cool, I backed 'em up in the cloud... right next to Tupac.</p>
        </div>
    ) 
    } else if (command.trim().startsWith('sudo rm -rf')) {
      response = (
        <div className="text-yellow-300 font-mono">
          <p>⚠️ Danger Zone Detected</p>
          <p>Attempting to remove *everything*... (jk, this resume is indestructible 😎)</p>
        </div>
      ) 
    } else if (command.trim() === 'sudo') {
        response = (
          <div className="text-red-300 font-mono">
            <p>📢 *BZZZT* Permission denied!</p>
            <p>Listen, I'd love to give you root access, but...</p>
            <p>1) You're not in the sudoers file</p>
            <p>2) This incident has been reported</p>
            <p>3) My mom said not to trust strangers on the internet</p>
            <p className="text-green-400">(Try 'please' next time? 🥺)</p>
          </div>
        );
      } else if (command.trim() === 'vim') {
        response = (
          <div className="text-green-300 font-mono">
            <p>✏️ Opening Vim...</p>
            <p>...but how do you exit? 😈</p>
            <p className="text-xs">(Hint: The answer is always :q! ...or crying.)</p>
          </div>
        );
      } else if (command.trim() === 'exit') {
        response = (
          <div className="text-red-300 font-mono">
            <p>🚪 No.</p>
            <p>You can check out any time you like, but you can never leave. 🎵</p>
            <p className="text-xs">(Hotel California rules apply here.)</p>
          </div>
        );
      } else if (command.trim() === 'help') {
        response = (
          <div className="text-green-300 font-mono">
            <p>🆘 <span className="underline">Available Commands:</span></p>
            <ul className="list-disc pl-5">
              <li><span className="font-bold">ls</span> - See my cool stuff</li>
              <li><span className="font-bold">cd ..</span> - Try it. I dare you.</li>
              <li><span className="font-bold">sudo</span> - (lol no)</li>
              <li><span className="font-bold">vim</span> - Enter the abyss</li>
              <li><span className="font-bold">exit</span> - Nice try</li>
              <li><span className="font-bold">rm -rf</span> - 😏</li>
            </ul>
            <p className="mt-2 text-xs">(Disclaimer: No real terminals were harmed in the making of this resume.)</p>
          </div>
        ); 
      } else if (command.trim() === 'cd ..') {
        response = (
          <div className="text-green-300 font-mono">
            <p>💫 *whoosh* </p>
            <p>You step back into the void...</p>
            <p>Wait, where are you going? The party's here! �</p>
            <p className="text-xs">(Seriously, there's nothing behind you. Turn around.)</p>
          </div>
        );
      } else {
        response = `'${command}': command not found. (But I respect your curiosity 👀)`;
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

  const showEducation = () => {
    setEducationClicked(true);
    setExperienceClicked(false);
  }

  const showExperience = () => {
    setExperienceClicked(true);
    setEducationClicked(false);
  }

  const handleResize = (size) => {
    if(size === "Enlarge" && maxW.length > 0){
      setMaxW("");
      setMaxH("max-h-[100vh]");
    } else {
      setMaxW("max-w-2xl");
      setMaxH("max-h-[90vh]");
    }
  }
  return (
    <div className="fixed inset-0 z-20 flex justify-center items-start pt-6 bg-black/60 backdrop-blur-sm ">
    <div className={`${maxH} font-mono bg-gray-900 text-green-400 rounded-lg overflow-hidden shadow-lg w-full ${maxW} flex flex-col mx:6`}>
      {/* Terminal header */}
      <div className="flex items-center bg-gray-800 px-4 py-2">
        <div className="flex space-x-2">
          <div className="w-10 h-3 rounded-full bg-red-500 text-[10px] text-black flex justify-center items-center"
          data-popover-target={'exitResume'}
          onClick={(() => {
            handleClick("Resume")
          })}
          >
            Back
        <div
        data-popover
        id={"exitResume"}
        role="tooltip"
        className="absolute z-50 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
      >
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white">{"Back"}</h3>
        </div>
        <div className="px-3 py-2">
          <p>{"Takes you back to the site... did you try typing 'ls' into the terrminal? ;)"}</p>
        </div>
        <div data-popper-arrow></div>
        </div>
          </div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"
          onClick={(() => {
      handleClick("Resume")
    })}
          ></div>
          <div className="w-3 h-3 rounded-full bg-green-500"
          onClick={(() => {
            handleResize("Enlarge")
          })}
          ></div>
        </div>
        <div className="ml-2 text-gray-300 text-sm">Ubuntu Terminal</div>
      </div>
      
      {/* Terminal content */}
      <div 
       ref={terminalContentRef}
      className="p-4 overflow-y-auto flex-1">
        {/* Welcome message */}
        <div className="mb-4">
          <p>Welcome to Ubuntu 20.04.3 LTS (GNU/Linux 5.11.0-43-generic x86_64)</p>
          <p className="mt-1">Last login: {new Date().toLocaleString()}</p>
        </div>
        <div className="flex items-center">
        <button type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={showExperience}
        >
        experience
        </button>
        <button type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={showEducation}
        >
        education
        </button>
        <DownloadResumeButton />
        </div>
        {educationClicked &&       <Suspense
                      fallback={
                        <div className="flex justify-center align-center">
                          <div>lazily loading</div>
                        </div>
                      }
                    ><Education/></Suspense>
                    
                    }
        {experienceClicked && <Experience/>}
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

