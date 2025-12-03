import React from "react";
import { FaLinkedinIn, FaWhatsappSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Header from "./Header.jsx";

function Home() {
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
        <div className="flex flex-col items-center justify-center w-full lg:w-[50vw] gap-8 p-8">
          <div className="text-center space-y-2">
            <p className="text-5xl font-bold">ANOWAI C. STEPHEN</p>
            <p className="text-xl font-semibold">
              Executive Virtual Administrative Assistant
            </p>
          </div>
          <p className="text-center ">
            I’m a detail-driven executive assistant who helps busy leaders
            operate with clarity, speed, and confidence. I specialise in
            streamlining workflows, anticipating needs before they arise, and
            managing the moving parts that keep projects and schedules running
            smoothly. My focus is simple: create order, protect your time, and
            ensure you can stay fully engaged with the work that matters most.{" "}
          </p>
        </div>
        {/* <img src="../public/Images/My Image.jpeg" alt="myImage" className="w-4xl h-screen rounded-tr-4xl rounded-br-4xl" /> */}
      </div>
    </div>
  );
}

export default Home;
