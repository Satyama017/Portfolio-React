import AboutImg from "../assets/memoji-smile.webp";
import FrontendImg from "../assets/monitor-svgrepo-com.svg";
import BackendImg from "../assets/code-coding-development-svgrepo-com.svg";
import EducationImg from "../assets/education-svgrepo-com.svg";

function About(){
    return(
        <div class="about-me">
      <h1>About Me</h1>
      <div class="footer-dot">
    <span></span>
  </div>
      <h2>MORE ABOUT ME</h2>
      <div class="main-content">
        <div class="emoji-container">
        <div class="emoji-image">
          <img src={AboutImg} alt="img1" />
        </div>
        </div>
        <div class="main-text">
          <h1>Hey! I'm <span>SATYAM</span></h1>
          <p>
            I'm Satyamsinha Patil, a Web developer and Computer Science student
            with 3+ years of experience. I specialize in building clean,
            responsive, and dynamic websites using HTML, CSS, JavaScript, React,
            NextJs, PostgreSQL, Prisma and MongoDB.
            <br />
            <br />
            <br />
            I'm always leveling up my skills and currently diving deeper into
            backend and DevOps. Whether it's full-time or freelance, I'm open to
            exciting opportunities where I can grow and build dope stuff with
            amazing people.
          </p>
          <h3>What I do</h3>

          <div class="leftout-icons">
          <div class="skill-pill remaining-icons">
      <img class="skill-icon" src={FrontendImg}/>
      <span>Frontend Development</span>
    </div>
    <div class="skill-pill remaining-icons">
      <img class="skill-icon" src={BackendImg}/>
      <span>Backend Development</span>
    </div>
    <div class="skill-pill remaining-icons">
      <img class="skill-icon" src={EducationImg}/>
      <span>Computer Science</span>
    </div>
    </div>
          <br />
          <h3>Connect With Me</h3>
          <div class="socials connect-with-me">
    <a href="#" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
    <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
    <a href="#" aria-label="Email"><i class="fa-regular fa-envelope"></i></a>
    <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
  </div>
          <button class="resume-button">Download Resume</button>
        </div>
      </div>
    </div>
    )
}


export default About;