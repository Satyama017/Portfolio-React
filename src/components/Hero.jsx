// import "../App.css";

function Hero(){
    return(
        <>
        <div className="Hero">
            <h1>
        <span>C</span><span>o</span><span>d</span><span>e</span><span>r</span>
        <span id="x">X</span>
        <span>D</span><span>r</span><span>e</span><span>a</span><span>m</span><span>e</span><span>r</span>
      </h1>
      <div className="p">Hello,I'm Satyamsinha Patil - a Software Developer</div>
      <div className="Hero-holder">
        {/* <button>Let's Connect</button> */}
        <div class="connect-button"><button>Let's Connect</button></div>
        <a href="mailto:satyampatil0017@gmail.com" className="email-link">📧satyampatil0017@gmail.com</a>
      </div>
        </div>
        </>
    )
}

export default Hero;