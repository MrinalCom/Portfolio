import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "../styles/home.module.css";

export default function Home() {
  const [mode, setMode] = useState("dark");

  const modeChange = () => {
    if (mode !== "light") {
      setMode("light");
      document.querySelector("body").setAttribute("data-theme", "light");
    } else {
      setMode("dark");
      document.querySelector("body").setAttribute("data-theme", "dark");
    }
    console.log(mode);
  };

  return (
    <div className="flex justify-center w-4/6 mt-96 mb-48 mx-auto relative">
      <div className={`${classes.subBox} ${classes.header}`}>
        <div className={`${classes.flexbox} ${classes.logo}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? classes.active : classes.navlink}`
            }
          >
            aD
          </NavLink>
        </div>
        <div className={`${classes.flexbox} ${classes.nav}`}>
          <div className={classes.navitems}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? classes.active : classes.navlink}`
              }
            >
              <span>about</span>
            </NavLink>
          </div>
          <div className={classes.navitems}>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${isActive ? classes.active : classes.navlink}`
              }
            >
              <span>projects</span>
            </NavLink>
          </div>
          <div className={classes.navitems}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? classes.active : classes.navlink}`
              }
            >
              <span>contact</span>
            </NavLink>
          </div>
        </div>
      </div>
      <div className={`${classes.subBox} ${classes.content}`}>
        <Outlet />
        <div className={classes.mode} onClick={modeChange}>
          {mode === "dark" ? (
            <span class="material-symbols-outlined">light_mode</span>
          ) : (
            <span class="material-symbols-outlined">dark_mode</span>
          )}
        </div>
      </div>
    </div>
  );
}
