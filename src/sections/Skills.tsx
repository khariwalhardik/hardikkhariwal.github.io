import { motion } from "framer-motion";
import { skills } from "../data/skills";
import "./Skills.css";

export const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="skills-heading"
      >
        Technical Skills
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="skill-card"
          >
            <div className="skill-icon">
              {<skill.icon />}
            </div>
            <p className="skill-name">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
