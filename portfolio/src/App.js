import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/Navbar.css';
import './Styles/Footer.css';
import './Styles/About.css';
import './Styles/Project.css';
import About from './Pages/About';
import Project from './Pages/Project';
import './App.css';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
       
      <Routes>
        <Route
          path="/"
          element={
            <div className="home-container">
              <h1 className="name-heading">
                <span className="word">Hindveer</span>
                <span className="word">Singh</span>
              </h1>
              <p className="intro-paragraph">
                I'm a passionate problem solver and web developer who loves turning ideas into
                functional websites. I never give up—challenges just make the process more exciting!
              </p>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
     <Footer />
    </Router>
  );
}

export default App;
