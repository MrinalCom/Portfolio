import TimelineSection from "../components/ExperienceSection";
import PageTitle from "../components/PageTitle";
import SkillsSection from "../components/SkillsSection";
import Title from "../components/Title";
import { education, experience } from "../constants";
import { useHeadingAnimation } from "../hooks/usePageAnimation";

export default function About() {
  const headRef = useHeadingAnimation();
  return (
    <>
      <PageTitle text1="about" text2="me" ref={headRef} />
      <div className="mt-10 w-full">
        <TimelineSection data={experience} title="experience" />
        <SkillsSection />
        <TimelineSection data={education} title="education" />
      </div>
      <Title title="about." left="left-52" />
    </>
  );
}
