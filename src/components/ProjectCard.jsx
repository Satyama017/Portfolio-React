function ProjectCard({
    title,
    imageUrl,
    Company,
    description
}){
    return(
        <div class="project_1">
        <div class="card_1">
          <div class="content_1">
            <h2>
                {title}
            </h2>
            <button>➜</button>
          </div>
          <div class="image_container_1">
            <img src={imageUrl} alt="" />
          </div>
        </div>
        <div class="t">
        <div class="text_1">
          <h2>{Company}</h2>
            Team Project
            <br />
            <br />
            <span>
            {description}</span>
          <ul>
            <li>Role-based dashboards for Admin and Users</li>
            <li>Secure job application system with email verification (OTP)</li>
            <li>AI chatbot for answering queries.</li>
            <li>User management and team collaboration tools</li>
            <li>Blog and service section management</li>
            <li>Image uploads integrated with AWS S3</li>
          </ul>
          <button>website</button>
        </div>
        </div>
      </div>
    )
}

export default ProjectCard;