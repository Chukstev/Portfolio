import Header from "./Header.jsx";
import { useState } from "react";
import { experienceData } from "./Experience.js";

function Experience() {
  const [data, setData] = useState(0);
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
        <div className="flex flex-col items-center justify-center w-full lg:w-[50vw] gap-8 p-8 py-24">
          <div className="text-center">
            <p className="text-xl font-semibold">
              Virtual Assistant - Hands-On Training & Practical Projects
            </p>
            <p className="text-l font-light">2025</p>
          </div>
          <p className="text-center text-md">
            Through focused virtual assistant training, I completed hands-on
            projects that replicated real client workflows, allowing me to
            develop strong organization, time-management, and productivity-tool
            skills that I now apply with confidence and precision.{" "}
          </p>
          <div>
            <p className="font-semibold text-l text-center">{experienceData[data].title}</p>
            <p className="text-justify text-md">{experienceData[data].description}</p>
            <img
              src={experienceData[data].imageUrl}
              alt="experienceImage"
              className="w-4xl h-96 rounded-2xl mt-6"
            />
            <div className="flex justify-center lg:justify-center lg:mt-4 lg:items-end lg:h-14">
              {experienceData.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setData(index)}
                  className={`rounded-full  m-4 cursor-pointer ${
                    index === data ? "bg-black h-2 w-6" : "border-1 h-2 w-2"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
