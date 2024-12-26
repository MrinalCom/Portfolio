import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import CursorContext from "../context/cursorContext";

export default function Layout({ children }) {
  const { variants, setMousePosition, mouseVariant, setMouseVariant } =
    useContext(CursorContext);

  const [isOpen, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState(null);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const cursorEnter = (navItem) => {
    setMouseVariant("text");
    setHoveredNavItem(navItem);
  };

  const cursorExit = () => {
    setMouseVariant("default");
    setHoveredNavItem(null);
  };

  //theme mode change
  const modeChange = () => {
    setDarkMode(!darkMode);
    if (darkMode === false) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  //full screen menu for smaller screens
  const closeMenu = () => {
    if (window.innerWidth < 768) {
      setOpen((prev) => !prev);
    }
    // console.log(window.innerWidth);
  };

  return (
    <>
      <div className="flex md:flex-row md:justify-center w-full md:w-4/5 lg:w-3/6 mt-20 md:mt-60 lg:mt-64 mb-12 md:mb-24 lg:mb-48 ml-0 md:ml-[18vw] lg:ml-[30vw] mr-auto md:mr-[18vw] lg:mr-auto relative font-['Roboto']">
        {/* navlinks */}
        <div className="flex items-center lg:flex-col gap-x-20 lg:gap-x-0 w-full lg:w-0 lg:h-3/4 p-12 pb-6 sm:p-12 lg:pt-0 fixed top-0 left-0 md:top-[15%] lg:top-1/4 lg:left-[calc(25%-3rem)] z-10 bg-bgColor2 sm:bg-transparent dark:bg-black dark:sm:bg-transparent">
          <div className="basis-1/6 lg:basis-0 flex items-center md:justify-end text-4xl cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "active" : "inactive"}`
              }
            >
              mA
            </NavLink>
          </div>
          <div
            className={
              isOpen
                ? "w-full md:w-screen h-screen left-0 top-0 md:-top-[147%] absolute flex flex-col justify-center items-center gap-y-10 text-5xl bg-white dark:bg-bgColorLight2 p-20"
                : "hidden lg:flex lg:flex-col justify-center lg:gap-y-20 basis-3/4 text-xl"
            }
          >
            <div
              className="lg:rotate-270"
              onMouseEnter={() => cursorEnter("about")}
              onMouseLeave={cursorExit}
            >
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${isActive ? "active" : "inactive"}`
                }
                onClick={closeMenu}
              >
                <span
                  className={`navitems`}
                  style={{
                    display: "inline-block",
                    transform:
                      hoveredNavItem === "about" ? "scale(1.5)" : "scale(1)",
                    color: hoveredNavItem === "about" ? "#000" : "",
                    transition: "transform 0.3s ease",
                  }}
                >
                  about
                </span>
              </NavLink>
            </div>
            <div
              className="lg:rotate-270"
              onMouseEnter={() => cursorEnter("works")}
              onMouseLeave={cursorExit}
            >
              <NavLink
                to="/works"
                className={({ isActive }) =>
                  `${isActive ? "active" : "inactive"}`
                }
                onClick={closeMenu}
              >
                <span
                  className={`navitems`}
                  style={{
                    display: "inline-block",
                    transform:
                      hoveredNavItem === "works" ? "scale(1.5)" : "scale(1)",
                    color: hoveredNavItem === "works" ? "#000" : "",
                    transition: "transform 0.3s ease",
                  }}
                >
                  works{" "}
                </span>
              </NavLink>
            </div>
            <div
              className="lg:rotate-270"
              onMouseEnter={() => cursorEnter("contact")}
              onMouseLeave={cursorExit}
            >
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive ? "active" : "inactive"}`
                }
                onClick={closeMenu}
              >
                <span
                  className={`navitems`}
                  style={{
                    display: "inline-block",
                    transform:
                      hoveredNavItem === "contact" ? "scale(1.5)" : "scale(1)",
                    color: hoveredNavItem === "contact" ? "#000" : "",
                    transition: "transform 0.3s ease",
                  }}
                >
                  contact
                </span>
              </NavLink>
            </div>
            {/* theme change button */}
            <div className="block lg:hidden cursor-pointer">
              <span
                className="material-symbols-outlined dark:text-fontColor"
                onClick={modeChange}
              >
                {darkMode ? "light_mode" : "dark_mode"}
              </span>
            </div>
          </div>
          {/* hamburger menu button */}
          <div className="lg:hidden basis-4/6 lg:basis-0 flex justify-end">
            <Hamburger
              toggle={setOpen}
              toggled={isOpen}
              size={20}
              color={darkMode ? "#FFFFFF" : "#000000"}
            />
          </div>
        </div>
        {/* main content section */}
        <div className="w-full h-fit p-12 lg:pl-0 text-fontColor2 dark:text-fontColor relative">
          <Outlet />
          <div className="fixed hidden lg:block top-1/4 md:left-[calc(90%)] lg:top-1/4 lg:left-[calc(80%-3rem)]">
            <span
              className={`material-symbols-outlined dark:text-fontColor`}
              onClick={modeChange}
            >
              {darkMode ? "light_mode" : "dark_mode"}
            </span>
          </div>
        </div>
      </div>
      {/* copyright ribbon */}
      <div className="w-full md:w-max font-semibold md:-rotate-45 fixed top-[96%] md:top-20 left-0 md:left-[-270px] p-2 md:pl-56 md:pr-72 text-bgColor bg-highlight2 dark:bg-highlight text-center">
        <span>&copy; Copyright 2024...Made with Love</span>
      </div>
      {/* custom cursor */}
      <motion.div
        variants={variants}
        animate={mouseVariant}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5,
          duration: 0.2,
        }}
        className="cursor invisible md:visible pointer-events-none absolute top-0 left-0 rounded-full flex justify-center items-center size-4 bg-[#b16b00] dark:bg-highlight"
      >
        {mouseVariant === "textLg" && (
          <span className="text-2xl text-fontColor dark:text-fontColor2">
            See Works
          </span>
        )}
      </motion.div>
    </>
  );
}
