import '../Styles/About.css'; 

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>

      <p className="about-intro">
        I’m a passionate problem solver and aspiring software engineer with a strong interest in full-stack development. 
        I’ve solved over 400 problems on LeetCode using Java, which has sharpened my DSA and algorithmic thinking skills.
      </p>

      <section className="about-section">
        <h3>Education</h3>
        <p>
          Bachelor of Engineering in Computer Science<br />
          Chitkara University, Rajpura — 2022-2026
          <br /><br />
          Holy Angels School (ICSE) – Class 10<br />
          Mukat Public School (CBSE) – Class 12 (Non-Medical)
        </p>
      </section>

      <section className="about-section">
        <h3>Experience</h3>
        <p>
          Content Head at BITS N BYTES, the techno-cultural club of Chitkara University, leading content creation and 
          communication for tech-driven events and initiatives.
        </p>
      </section>

      <section className="about-section">
        <h3>Goals</h3>
        <p>
          I'm passionate about software engineering and enjoy solving complex problems using Java, my go-to language for DSA. 
          I aim to grow as a full-stack developer by building scalable, user-centric applications. My aspiration is to contribute 
          to innovative products that combine strong engineering with impactful user experiences.
        </p>
      </section>

      <section className="about-section">
        <h3>Aspirations</h3>
        <p>
          I aspire to build impactful software products that combine clean engineering with modern web technologies. 
          With a strong Java foundation and a passion for full-stack development, I’m driven to create solutions that 
          enhance user experiences and add real value.
        </p>
      </section>
    </div>
  );
}

export default About;
