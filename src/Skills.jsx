import Header from "./Header.jsx";
import { FaLinkedinIn, FaWhatsappSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import { SkillsData } from "./Skills.js";

function Skills() {

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
          <div className="grid">
            <div>
              {" "}
              <p className="outlined-text px-5 text-5xl font-bold lg:text-8xl font-serif">
                PORTFOLIO
              </p>
            </div>
            <div className="flex justify-center gap-3 mt-4">
              {/* Social media icons can be added here if needed */}
              <a href="https://www.linkedin.com/in/anowaichuks" target="_blank">
                <FaLinkedinIn className="text-3xl text-blue-500 cursor-pointer" />
              </a>
              <a href="https://wa.link/pjezog" target="_blank">
                <FaWhatsappSquare className="text-green-500 text-3xl cursor-pointer" />
              </a>
              <a href="https://www.anowaichukwuemeka@gmail.com" target="_blank">
                <MdOutlineEmail className="text-3xl text-amber-500 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-6 items-baseline w-full lg:w-[50vw] p-6 lg:p-20">
          {SkillsData.map((categoryItem, index) => (
            <div key={index} className="my-6">
              <p className="font-semibold text-l mb-1">
                {categoryItem.category}
              </p>
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
