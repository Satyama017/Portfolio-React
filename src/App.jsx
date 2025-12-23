import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Chatbot from "./components/chatbot";
import ShiningText from "./components/ShiningText";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";


function App(){
  return(
    <div className="site-wrapper">
    <Chatbot></Chatbot>
    <Navbar></Navbar>
    <ShiningText></ShiningText>
    <Hero></Hero>
    <About></About>
    <Projects></Projects>
    <Skills></Skills>
    <Education></Education>
    <Contact></Contact>
    <Footer></Footer> 
    </div>
  )
}
export default App;