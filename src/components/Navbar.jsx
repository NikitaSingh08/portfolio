import { useState, useEffect } from "react";
//import {Navbar} from "react-bootstrap";
// import '../Style.css';
import contact from '../components/Assets/add-contact.png';
import gmail from '../components/Assets/gmail.png';
import linkedIn from '../components/Assets/linkedin.png';
export const NavBar = () => {

  const[activeLink, setActiveLink] = useState('home');
  const[scrolled, setScrolled] = useState(false);

  useEffect( () =>{
    const onScroll = () => {
      if(window.pageYOffset > 50){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
    window.addEventListener("scroll",onScroll);
    return() => window.removeEventListener("scroll", onScroll);
  },[])

  const onupActLink = (value) => {
    setActiveLink(value);
  }
    return(
      <nav className={scrolled ? "scrolled": ""} class="navbar navbar-expand-lg">
  <div class="container-fluid bg-dark text-white fixed-top">
    <a class="navbar-brand text-white" href="#">Navbar
    {/* <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24" /> */}
    </a>
    <div class="collaps" id="navbarNavAltMarkup">
      <div class="navbar-nav fs-4 bg-dark text-light">
        <a aria-current="page" href="#" className={activeLink === 'home' ? 'active navbar-link text-info px-4': 'navbar-link fs-4 text-light px-4'} onClick={() =>onupActLink('home')}>Home</a>
        <a href="#" className={activeLink === 'skills' ? 'active navbar-link text-info px-4': 'navbar-link text-light px-4'} onClick={() =>onupActLink('skills')}>Skills</a>
        <a href="#" className={activeLink === 'projects' ? 'active navbar-link text-info px-4': 'navbar-link text-light px-4'} onClick={() =>onupActLink('projects')}>Projects</a>
       </div>
     </div>
     <div class="d-flex justify-content-end">
         <span className="navbar-text">
               <div className="social-icon">
                 <a href="#"><img src={contact} alt="contact" className="contactImg" /></a>
                 <a href="#"><img src={gmail} width="20px" alt="gmail" className="gmailImg" /></a>
                 <a href="#"><img src={linkedIn} width="20px" alt="linkedin" className="linkedImg"/></a>
               </div>
               <button className="vvd text-light" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
             </span>
             </div>
  </div>
</nav>
    )
}
