import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import resume from "../assets/Mrinal_Resume.pdf";
import Title from "../components/Title";
import CursorContext from "../context/cursorContext";
import { usePageAnimation } from "../hooks/usePageAnimation";

export default function HomeContent() {
  const navigate = useNavigate();
  const { ref1, ref2, ref3 } = usePageAnimation();
  const { setMouseVariant } = useContext(CursorContext);

  const [hoveredSpan, setHoveredSpan] = useState(null);

  const cursorEnter = (span) => {
    setMouseVariant("textLg");
    setHoveredSpan(span);
  };

  const cursorExit = () => {
    setMouseVariant("default");
    setHoveredSpan(null);
  };

  const navigateToWork = (route) => {
    cursorExit();
    navigate("/works");
  };

  return (
    <>
      <h1 className="text-2xl sm:text-3xl lg:text-5xl" ref={ref1}>
        hello ! me{" "}
        <span className="text-highlight2 dark:text-highlight">
          Mrinal Anand
        </span>
      </h1>
      <p ref={ref2} className="mt-2 h-[7rem] md:h-[10rem] lg:h-[8rem] w-full">
        <span className="text-4xl md:text-6xl lg:text-[4rem]">
          I create things for the{" "}
          <span
            onClick={() => navigateToWork("web-works")}
            onMouseEnter={() => cursorEnter("web-span")}
            onMouseLeave={cursorExit}
          >
            web
          </span>{" "}
          and{" "}
          <span
            onClick={() => navigateToWork("mobile-works")}
            onMouseEnter={() => cursorEnter("mobile-span")}
            onMouseLeave={cursorExit}
          >
            mobile
          </span>
        </span>
      </p>

      <p
        className="mt-2 sm:mt-5 w-full md:w-3/4 lg:w-full text-lg md:text-xl"
        ref={ref3}
      >
        As a full-stack developer, I specialize in creating tailored solutions
        for both web and mobile platforms. From front-end design to back-end
        development, I focus on building responsive, scalable, and user-friendly
        websites and applications. Whether you're starting from scratch or
        improving an existing product, I can transform your ideas into reality
        with modern, efficient, and cutting-edge technology.
      </p>
      <p className="mt-8 text-md md:text-lg">
        <span className="">Have a look on my resume </span>
        <NavLink to={resume} target="_blank">
          <i className="fa-solid fa-arrow-right" title="resume_link"></i>
        </NavLink>
      </p>
      <div className="flex justify-start text-2xl mt-14">
        <div>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/mrinalanand2001/"
            className="decoration-none"
          >
            <i className="fa-brands fa-linkedin" title="Linkedin"></i>
          </Link>
        </div>
        <div className="ml-20">
          <Link
            target="_blank"
            to="https://x.com/MrinalA83172070"
            className="decoration-none"
          >
            <i className="fa-brands fa-x-twitter" title="X"></i>
          </Link>
        </div>
        <div className="ml-20">
          <Link
            target="_blank"
            to="https://github.com/MrinalCom"
            className="decoration-none"
          >
            <i className="fa-brands fa-github" title="GitHub"></i>
          </Link>
        </div>
      </div>
      <Title title="MA." left="left-60" />
    </>
  );
}
