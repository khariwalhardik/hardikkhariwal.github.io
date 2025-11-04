import { motion } from "framer-motion";
import { experiences } from "../data/experiences";
import "./Experiences.css";

export const Experiences = () => {
  return (
    <section id="experience" className="experience">
      <motion.h2
        className="experience__title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="experience__timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience__card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="experience__role">{exp.role}</h3>
            <p className="experience__company">{exp.company}</p>
            <p className="experience__period">{exp.period}</p>
            <p className="experience__desc">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
