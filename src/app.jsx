import Hero from "./components/Hero";
import Skills from "./components/skills";
import About from "./components/About";
import Work from "./components/work";
import Contact from "./components/contact";

import "./style.css";
export default function App() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
