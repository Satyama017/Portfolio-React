function Contact(){
    return(
        <>
<div class="contact-title">
<h1>Contact</h1>
<div class="footer-dot">
    <span></span>
  </div>
<p>GET IN TOUCH</p>
</div>
  <section class="contact-section">
  <div class="contact-left">
    <h1>Let's work together</h1>
    <p>
      I'm available for full-time roles & freelance projects.
    </p>
    <p>
      My inbox is always open, whether you have a question or just want to say hi.
    </p>
    <p>
      I'll try my best to get back to you!
    </p>

    <a href="mailto:satyampatil0017@gmail.com" class="email-btn">
      ✈ satyampatil0017@gmail.com
    </a>
  </div>

  <div class="contact-right">
    <form class="contact-form">
      <div class="form-row">
        <div class="form-group">
          <label>Your Name</label>
          <input type="text" placeholder="John Doe" />
        </div>

        <div class="form-group">
          <label>Your Email</label>
          <input type="email" placeholder="john@example.com" />
        </div>
      </div>

      <div class="form-group">
        <label>Subject</label>
        <input type="text" placeholder="Project Inquiry" />
      </div>

      <div class="form-group">
        <label>Message</label>
        <textarea placeholder="Hello, I'd like to discuss a project..."></textarea>
      </div>

      <button class="submit-btn">
        ✈ Send Message
      </button>
    </form>
  </div>
</section>
</>
    )
}

export default Contact;