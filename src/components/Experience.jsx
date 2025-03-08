import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      className="relative flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left - Timeline Indicator */}
      <div className="w-10 h-10 rounded-full bg-[#1d1836] flex items-center justify-center">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-6 h-6 object-contain"
        />
      </div>

      {/* Right - Content */}
      <div className="p-5 rounded-lg shadow-lg bg-[#232631] w-full md:w-3/4">
        <h3 className="text-white text-lg font-bold">{experience.title}</h3>
        <p className="text-secondary text-sm font-semibold">
          {experience.company_name} | {experience.date}
        </p>

        <ul className="mt-3 list-disc ml-5 space-y-2 text-white text-sm">
          {experience.points.map((point, index) => (
            <li key={index} className="pl-1">{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section className="py-12">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-10 space-y-10">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
