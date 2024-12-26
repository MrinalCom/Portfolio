import { motion } from "framer-motion";
import bootstrap_icon from "../assets/images/bootstrap_icon.png";
import CSS_icon from "../assets/images/css_icon.png";
import express_icon from "../assets/images/express_icon.png";
import HTML_icon from "../assets/images/html5_icon.png";
import JS_icon from "../assets/images/javascript_icon.png";
import mongodb_icon from "../assets/images/mongodb_icon.png";
import next_icon from "../assets/images/next_icon.png";
import node_icon from "../assets/images/nodejs_icon.png";
import react_icon from "../assets/images/react_icon.png";
import tailwind_css_icon from "../assets/images/tailwind_css_icon.png";
import typescript_icon from "../assets/images/typescript_icon.png";
import wordpress_icon from "../assets/images/wordpress_icon.png";
import { SubTitle } from "./PageTitle";

const skills_icon_table = [
  {
    name: "Next.js",
    link: next_icon,
  },
  {
    name: "React.js",
    link: react_icon,
  },
  {
    name: "Node.js",
    link: node_icon,
  },
  {
    name: "Express.js",
    link: express_icon,
  },
  {
    name: "MongoDB",
    link: mongodb_icon,
  },
  {
    name: "Tailwind",
    link: tailwind_css_icon,
  },
  {
    name: "Typescript",
    link: typescript_icon,
  },
  {
    name: "JS",
    link: JS_icon,
  },
  {
    name: "HTML",
    link: HTML_icon,
  },
  {
    name: "CSS",
    link: CSS_icon,
  },
  {
    name: "Bootstrap",
    link: bootstrap_icon,
  },
  {
    name: "Wordpress",
    link: wordpress_icon,
  },
];

export default function SkillsSection() {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0, duration: 0.8 }}
      viewport={{ once: true, amount: 0 }}
    >
      <SubTitle text="skills" />
      <div className="w-full md:w-11/12 pt-4 mb-5 text-base grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-14 items-center">
        {skills_icon_table.map((icons, index) => (
          <div
            key={index}
            className="flex justify-evenly items-center flex-wrap border-1 border-b-4 border-b-highlight2 dark:border-b-highlight rounded-md p-4 shadow-2xl"
          >
            <img src={icons.link} alt="" className="size-12" />
            <span>{icons.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
