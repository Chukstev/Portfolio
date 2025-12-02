import Header from "./Header.jsx";
import { useState, useEffect } from "react";
import { SkillsData } from "./Skills.js";

function Skills() {
  const { skill, setSkill } = useState(0);

  return (
    <div>
      <Header />
      <div className="w-full flex flex-col justify-between lg:flex-row">
        {/* Home page content can go here */}
       <div
          // Using the public/Images path (served at /Images/...) and inline
          // styles for background sizing/position/height so it works without
          // Tailwind utilities.

          className="bg-[url('/Images/My-Image.jpeg')] bg-no-repeat bg-center bg-cover 
             w-full h-[80vh] lg:w-[50vw] lg:h-screen lg:rounded-r-full flex items-center justify-center"
        >
          <p className="outlined-text px-5 text-5xl font-bold lg:text-8xl font-serif">
            PORTFOLIO
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-6 items-baseline w-full lg:w-[50vw] p-6 lg:p-20">
          {SkillsData.map((categoryItem, index) => (
            <div key={index} className="my-6">
              <p className="font-semibold text-l mb-1">{categoryItem.category}</p>
              <ul className="list-disc space-y-1 text-md">
                {categoryItem.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
