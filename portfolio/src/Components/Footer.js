import '../Styles/Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section intro">
        <h2>Portfolio</h2>
        <p className='para'>Crafting exceptional digital experiences with modern technologies and innovative design.</p>
      </div>

      <div className="footer-section">
        <h3>Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Resources</h3>
        <ul>
          <li><a href="/resume.pdf" target='blank' rel='noopener noreferer'>Resume</a></li>
          <li><a href="https://github.com/hind0025">GitHub</a></li>
          <li><a href="https://leetcode.com/u/hind0025/">LeetCode</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Connect</h3>
        <ul className="footer-icons">
          <li><a href="https://github.com/hind0025"><FaGithub /></a></li>
          <li><a href="mailto:s.hindveer2004@gmail.com"><FaEnvelope /></a></li>
          <li><a href="https://www.linkedin.com/in/hindveer-singh-293043268/"><FaLinkedin /></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
