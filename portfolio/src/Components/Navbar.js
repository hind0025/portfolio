import React from 'react';
import '../Styles/Navbar.css'; 
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo"><a href="/">My Portfolio</a></div>
      <ul className="nav-links">
        <li><a href="/about">About</a></li>
        <li><a href="#techstack">Tech Stack</a></li>
        <li><a href="/project">Projects</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;