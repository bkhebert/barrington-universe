import flare from "./resume_icons/phoenix.png"
import digicry from "./resume_icons/digicry.png"
import demlogo from "./resume_icons/demlogo.png"
import doglogo from "./resume_icons/doglogo.png"
import nola from "./resume_icons/nola.png"
import usmc from "./resume_icons/usmc.png"

export default [
  {
    logo: flare,
    title: "FLARE", 
    dateOrStack: "SERN", 
    lengthOrDescription: "Social-Media Event-Finding App", 
    role: "Software Engineer", 
    techStackArray: [ "ExpressJS", "mySQL", "Sequelize", "Socket.io", "PassportJS", "ShadCN", "Tailwind", "Pixi.js", "Jest", "React", "TypeScript", "Axios", "Magic UI", "Google Gemeni" ],
    bulletsArray: [
     "Implemented Tailwind CSS, ShadCN, and Magic UI for consistent design, reusable UI components, and realization of product vision.",
     "Used TypeScript for code organization & error detection. Tested app features with Jest, ensured error prevention with ESlint.",
     "Used Webpack for bundling & reduced load time & memory-heap usage by 30% using bundle-analyzer, lazy-loading, & code-splitting.",
     "Built real-time multiplayer gaming experience with Socket.io for client to client communication in chatroom feature .",
     "Used Pixi-React beta with React 19 (pre-release) for game graphics, adapting to evolving frameworks still in development.",
     "Created seed funcs to seed database with information & tested functionality using Jest during development.",
     "Utilized Sequelize ORM for CRUD operations in mySQL database, along with Axios for server-to-client communication & RESTful API’s.",
     "Handled all logic for 2 mini-games: pixijs for graphics, Gemeni AI for prompts, Magic UI & ShadCN for styling & dayjs for timers.",
     "Worked within a team of 5 for a cohesive development process using wireframes, architecture mapping, SCRUM, db diagram & trello."
    ],
  },
  {
    logo: demlogo,
    title: "DEMOCRACY ONLINE", 
    dateOrStack: "SERN", 
    lengthOrDescription: "AI Logic & Reasonability Checking Debate App!", 
    role: "Software Engineer", 
    techStackArray: [ "Postgres", "Express", "React", "Node", "Tailwind", "Axios", "Google Cloud"  ],
    bulletsArray: [
     "Created debate forum UI utilizing Tailwind & implemented logic for sending information to database for AI reasonability checks",
     "Implemented Google API's to get current local politician information based on the users location ",
     "Made UI & logic for a survey the user would take on signup & used Postgres & Sequelize for storing information on the user",
     "Updated proper user information in postgres database based on survey styled with tailwind UI & flowtbite"
    ],
  },
  {
    logo: doglogo,
    title: "DOGAGATCHI", 
    dateOrStack: "MERN", 
    lengthOrDescription: "Similar to Tamagotchi, but with a dog!", 
    role: "Software Engineer", 
    techStackArray: [ "Bootstrap", "Babel", "Webpack", "Pixi/React", "MongoDB", "WebPack", "Google Cloud" ],
    bulletsArray: [
     "Integrated PixiJS and React-Pixi to generate dynamic graphics and animated sprite characters.",
     "Implemented JavaScript for game controls, collision detection and physics-based interactions.",
     "Designed interactive 2D tile-maps using json files generated via SpriteFusion for procedurally generated elements and enemy AI.",
     "Utilized React-Bootstrap, React-Router-Dom, Node Express, and Axios for dynamic UI updates of player stats.",
     "Recorded, mixed, & implemented game audio design using Cubase 9 DAW & Free sound libraries.",
     "Acting Scrum Master who ensured team effectiveness & following of Scrum framework"
    ],
  },
  {
    logo: digicry,
    title: "DIGI-CRY", 
    dateOrStack: "MERN", 
    lengthOrDescription: "Mental health App", 
    role: "Software Engineer", 
    techStackArray: [ "MongoDB", "Express", "React", "Node", "Google Gemeni API", "Material UI", "Axios", "PassportJS", "Google Cloud"  ],
    bulletsArray: [
     "Utilized Google OAuth/Passport.js for authentication and login; tracking user sessions & cookies via Express.",
     "Implemented Google Gemini API’s Artificial Intelligence, for interactive community forum experience. ",
     "Used Axios & Node Express for efficient routing & updates within NoSQL database: MongoDB accessed via Mongoose ORM ",
    ],
  },
  {
    logo: usmc,
    title: "UNITED STATES MARINE CORPS ", 
    dateOrStack: "Apr2011–Apr2015 ", 
    lengthOrDescription: "MOS-1812 Semper Fidelis", 
    role: "Corporal", 
    techStackArray: [ "Honor", "Courage", "Commitment", "Discipline", "Tact", "Integrity", "Bearing", "Decisiveness", "Initiative"  ],
    bulletsArray: [
      "Trained new Marines in operations and usage of over $70,000,000 of government equipment",
      "Discipline, and tactical readiness, adaptability and strategic decision-making in high-pressure environments.", 
      "Progressed through the ranks up to Corporal due to leadership, technical expertise, and commitment to excellence. " ,
      "Held a Secret Security Clearance, demonstrating trustworthiness and the ability to handle sensitive information. ",
    ],
  },
  {
    logo: nola,
    title: "RACCOON CITY MASSACRE & NEW ORLEANS", 
    dateOrStack: "Jan2017–Aug2025 ", 
    lengthOrDescription: "Arts, Culture, Entertainment", 
    role: "Bartender / Musician", 
    techStackArray: ["Wix", "Cubase 9", "Avid Pro", "Filmora", "Streamlabs OBS"],
    bulletsArray: [
      "Oversaw the production of a series of short-films & music videos which were involved in local film festivals",
       "Film Post-production using various video-editing software, including Avid Pro, Filmora, & Streamlabs OBS.",
     "Wrote, recorded, &  produced over 50+ full-length songs using Cubase 9. Taught a team of musicians structure & layout of music.",
     "Booked, managed, & promoted a nationwide music tour across 10 states along with connecting with businesses.",
     " Developed a band website & brand using Wix that sold over 600$ of band merchandise nation-wide.",
    ],
  },
]