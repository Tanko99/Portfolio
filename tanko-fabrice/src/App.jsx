import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./pages/HomePage";
import AboutMe from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import Skills from "./pages/SkillsPage";
import ContactMe from "./pages/ContactPage";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills"  element={<Skills />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;