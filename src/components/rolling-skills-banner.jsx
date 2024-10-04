import React from 'react';

export default function RollingSkillsBanner() {
  const skills = [
    "JavaScript", "React", "Node.js", "Python", "Django", "PostgreSQL", "MongoDB", "Docker",
    "HTML5", "CSS3", "TypeScript", "GraphQL", "AWS", "Git", "Webpack", "Redux"
  ];

  return (
    <div className="overflow-hidden bg-gray-100 py-10">
      <div className="relative w-full">
        <div className="animate-scroll flex">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 mx-4 bg-white rounded-lg shadow-md p-6 text-center"
            >
              <h3 className="text-lg font-semibold text-gray-800">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 5s linear infinite;
        }
        //.animate-scroll:hover {
        //  animation-play-state: paused;
        //}
      `}</style>
    </div>
  );
}