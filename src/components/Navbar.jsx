// import "../App.css";

function Navbar(){
    return(
        <header className="nav-bar">
      <div id="myLinks">
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
        <a href="#more">More</a>
      </div>
      <a href="javascript:void(0);" className="icon" onclick="myFunction()">
        <i className="fa fa-bars"></i>
      </a>
    </header>
    )
}

export default Navbar;