import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Experiences } from "./sections/Experiences";
import { Contacts } from "./sections/Contacts";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
