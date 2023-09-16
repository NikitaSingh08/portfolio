import { Banner } from './components/Banner';
import './ind.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Navyb } from './components/Navyb';
// import "./components/Assets/bootstrap-icons";
import { NavBar } from './components/Navbar';
import Resume from './components/Resume';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Navyb />
      {/* <NavBar /> */}
      <Routes>
      <Route exact path="/" element={<Banner />} />
       <Route exact path="/skills" element={<Skills />} />
       <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/Resume" element={<Resume />} />
        
      </Routes>
    
      {/* <Banner /> */}
      {/* <Skills />
      <Projects /> */}

      {/* <Routes>
        <Route exact path="/Resume" element={<Resume />} />
        <Route exact path="/" element={<Banner />} />
      </Routes> */}
    
     
    </div>
  );
}

export default App;
