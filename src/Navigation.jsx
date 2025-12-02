import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="hidden lg:flex mx-20">
        {/* desktop navigation */}
        <ul className="flex gap-8 text-xl items-stretch">
          <li className="flex-1">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `p-4 ${isActive ? "border-b-2 border-b-red-100" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="flex-1">
            <NavLink
              to={"/experience"}
              className={({ isActive }) =>
                `p-4 ${isActive ? "border-b-2 border-b-red-100" : ""}`
              }
            >
              Experience
            </NavLink>
          </li>
          <li className="flex-1">
            <NavLink
              to={"/skills"}
              className={({ isActive }) =>
                `p-4 ${isActive ? "border-b-2 border-b-red-100" : ""}`
              }
            >
              Skills
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* mobile menu button */}
      <div className="lg:hidden flex justify-end fixed top-5 right-3">
        <button onClick={() => setIsOpen(true)}>
          <FiChevronDown className="text-white bg-transparent border-2 rounded-md text-5xl" />
        </button>
      </div>
      {/* mobile slide down menu */}

      <div
        className={`fixed top-0 right-0 py-3 text-center rounded-b-xl w-full h-1/4 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col gap-8 text-xl items-stretch">
          <li className="flex-1">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `p-4 ${isActive ? "border-b-2 border-b-red-100" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="flex-1">
            <NavLink
              to={"/experience"}
              className={({ isActive }) =>
                `p-4 ${isActive ? "border-b-2 border-b-red-100" : ""}`
              }
            >
              Experience
            </NavLink>
          </li>
          <li className="flex-1">
            <NavLink
              to={"/skills"}
              className={({ isActive }) =>
                `p-4 ${isActive ? "border-b-2 border-b-red-100" : ""}`
              }
            >
              Skills
            </NavLink>
          </li>
          <button
            className="absolute top-5 right-3"
            onClick={() => setIsOpen(false)}
          >
            <FiChevronUp className="text-black bg-transparent border-2 rounded-md text-5xl" />
          </button>
        </ul>
      </div>
    </div>
  );
}
export default Navigation;
