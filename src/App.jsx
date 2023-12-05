import SplashPage from "./components/SplashPage";
import About from "./components/About";
import { ProjectType } from "./components/ProjectType";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <SplashPage />
      <About />
      <ProjectType />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
