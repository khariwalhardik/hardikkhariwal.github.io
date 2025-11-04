import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import "./Contacts.css";

export const Contacts = () => {
  return (
    <section id="contact" className="contacts-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="contacts-heading"
      >
        Connect With Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="contacts-icons"
      >
        <a
          href="mailto:your@email.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <Mail size={48} />
        </a>

        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <Linkedin size={48} />
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <Github size={48} />
        </a>
      </motion.div>
    </section>
  );
};
