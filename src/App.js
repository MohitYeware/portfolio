import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="w-min md:w-full">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
