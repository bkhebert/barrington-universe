import React from "react";

const ExperienceCard = () => {

  return (
    <div className="flex space-x-4 relative">
      {/* Left: Logo + Line */}
      <div className="flex flex-col items-center">
        <img
          src="/logo.png" // Replace with your logo path
          alt="Company Logo"
          className="w-10 h-10 rounded-md"
        />
        <div className="w-px h-full bg-gray-700 mt-2"></div>
      </div>

      {/* Right: Content */}
      <div className="pb-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
          <h3 className="text-lg font-semibold text-white">Rapidstart</h3>
          <span className="text-sm text-gray-400">
            Feb 2024 - Present (1 year 3 months)
          </span>
        </div>

        {/* Role & Location */}
        <div className="text-sm text-gray-300 mb-2">
          <span className="font-semibold text-white">Lead Full Stack Engineer</span>{" "}
          · Full-time · Victoria, Australia
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {["Next", "React", "REST", "FastAPI", "AWS", "Docker", "Redux", "i18n", "Tailwind"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-800 text-sm text-white rounded-full border border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Responsibilities */}
        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
          <li>
            Develop various kinds of dashboards including CRM, Influencer Marketplace, Ad Campaign, AI Tools and Kanban using Next.js, MUI
          </li>
          <li>Develop backend engines using FastAPI.</li>
        </ul>
      </div>
    </div>
  )
}

export default ExperienceCard;