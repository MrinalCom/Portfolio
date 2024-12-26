import { Link } from "react-router-dom";
import projectImg from "../assets/images/project_img.png";
const project = {
  name: "Advanced Weather App",
  description:
    "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? ",
  project_link: "...jujk...loo",
  github_link: "...jujk...loo",
};

export default function ProjectSection() {
  return (
    <div className="text-fontColor flex-wrap lg:flex w-full md:w-5/6 mb-14 rounded-md p-8 border-1 border-b-4 border-b-highlight">
      {/* Project info */}
      <div className="w-full lg:w-3/6">
        <div className="">
          <h1 className="text-2xl font-normal tracking-tight text-highlight sm:text-3xl">
            {project.name}
          </h1>
        </div>
        <div className="lg:pr-8 lg:pt-2">
          {/* Description and links */}
          <div>
            <h3 className="text-highlight">Description</h3>

            <div className="">
              <p className="text-base">{project.description}</p>
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-sm font-medium text-highlight">
              <Link to={project.github_link}>Get the code</Link>
            </h2>
            <div className="mt-2">
              <p className="text-sm ">Live</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-3/6 flex justify-center items-center relative group">
        <img src={projectImg} alt="" className="w-full h-auto" />
        <div className="flex justify-center items-center absolute gap-4 w-full h-4/6 transition-all duration-500 bg-titleColor/40 opacity-0 group-hover:opacity-100 cursor-pointer">
          <div className="px-2 py-1 bg-highlight text-bgColor font-bold">
            React
          </div>
          <div className="px-2 py-1 bg-highlight text-bgColor font-bold">
            Firebase
          </div>
          <div className="px-2 py-1 bg-highlight text-bgColor font-bold">
            Tailwind CSS
          </div>
        </div>
      </div>
    </div>
  );
}
