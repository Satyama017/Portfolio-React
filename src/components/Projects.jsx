import ProjectCard from "./ProjectCard";
import ProjectImg1 from "../assets/project1_img.webp";
import ProjectImg2 from "../assets/project2_img.webp";
import ProjectImg3 from "../assets/project3_img.webp";
import ProjectImg4 from "../assets/project4_img.webp";

function Projects() {
    return(
        <div class="project-section">
      <h1 id="project-title">Projects</h1>
      <br/>
      <div class="footer-dot">
    <span></span>
  </div>
      <h3 id="project-subtitle">FEATURED CASE STUDIES</h3>
      <ProjectCard title={"Agency Platform with job posting,AI chatbot and secure application system."}
      imageUrl={ProjectImg1}
      Company={"Diteck Technology"}
      description={"A full-stack agency platform with AI-powered features, secure job application flow, and role-based dashboards for Admin and Users."}
      ></ProjectCard>

      <ProjectCard title={"Food delivery platform with multiple payment methods and role-based dashboards."}
      imageUrl={ProjectImg2}
      Company={"Tasty Drop"}
      description={"A full-stack food delivery platform with multiple payment methods and role-based dashboards for Admin, Rider, and Partner roles."}
      ></ProjectCard>

      <ProjectCard title={"A community platform for reporting and reclaiming lost items with dark/light mode."}
      imageUrl={ProjectImg3}
      Company={"RetrieveX"}
      description={"A community-driven platform for reporting and reclaiming lost items with user accounts, detailed reports, ownership verification, and an admin dashboard."}
      ></ProjectCard>

      <ProjectCard title={"Create anonymous polls that disappear after a set time. No login needed."}
      imageUrl={ProjectImg4}
      Company={"VanishVote"}
      description={"A minimalist poll creation platform allowing users to make anonymous, timed polls with no login required. Built for quick decisions and ephemeral feedback."}
      ></ProjectCard>

      <div class="button-wrapper">
      <button id="more-projects-btn">See more projects ›</button>
    </div>

      </div>
    )
}

export default Projects;