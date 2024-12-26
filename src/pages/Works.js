import PageTitle from "../components/PageTitle";
import Title from "../components/Title";
import {
  useHeadingAnimation,
  useSectionAnimation,
} from "../hooks/usePageAnimation";

export default function Works() {
  let headRef = useHeadingAnimation();
  let sectionRef = useSectionAnimation();

  const projects = [
    {
      name: "DOCUP",
      link: "https://devfolio.co/projects/docup-f033",
      description: `
        DOCUP is a user-friendly platform designed to simplify doctor appointment booking for patients. Built during a 36-hour hackathon, this system allows patients to schedule appointments with ease while enabling doctors to view and manage their schedules seamlessly. The project was developed with a focus on creating a smooth and efficient experience, helping countless individuals gain convenient access to healthcare from the comfort of their homes.
      `,
      technologies:
        "HTML, CSS, JavaScript, MongoDB, Mongoose, Express.js, Encryption, NodeJS, Bootstrap",
    },
    {
      name: "DIGORBIT",
      link: "https://digorbit.tech/",
      description: `
        Digorbit is a platform dedicated to crafting unique and tailored digital experiences that drive brand presence, user engagement, and business growth. With a strategic approach, the platform introduces features aimed at enhancing accessibility and usability, effectively doubling business growth. It serves as a valuable tool for businesses seeking to elevate their online presence.
      `,
      technologies: "ReactJs, JavaScript, Bootstrap, TailwindCSS",
    },
    {
      name: "VIDEOTUBE",
      link: "https://videotube-frontend-v1.vercel.app/", 
      description: `
        Videotube is a full-stack video hosting platform featuring a React-based frontend and a secure Node.js backend. Users can upload videos, interact via comments and subscriptions, and manage their accounts with JWT-based authentication. The app integrates Cloudinary for efficient video and image storage, ensuring fast media delivery. Built with scalability and security in mind, Videotube provides a seamless user experience.
      `,
      technologies: "React.js, Node.js, Express.js, MongoDB, Mongoose, Cloudinary, JWT, bcrypt, RESTful APIs",
    }
    
  ];

  return (
    <>
      <PageTitle ref={headRef} text1="look what I've" text2="built" />
      <div ref={sectionRef}>
        <br></br>
        <br></br>
        <br></br>
        <div className="w-full mt-5">
          {projects.map((project, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-lg font-bold">
                {project.name}{" "}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  (View)
                </a>
              </h3>
              <p className="mt-2">{project.description}</p>
              <p className="mt-2 font-semibold">
                Technologies Used: {project.technologies}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Title title="projects." left="left-44" />
    </>
  );
}
