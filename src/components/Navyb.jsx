import './Nav.css'
import { useState, useEffect } from "react";
import {NavLink , useNavigate} from 'react-router-dom';
import contact from '../components/Assets/add-contact.png';
import gmail from '../components/Assets/gmail.png';
import logo from '../components/Assets/logo2.png';
import linkedIn from '../components/Assets/linkedin.png';

export const Navyb= () => {
    const[activeLink, setActiveLink] = useState('home');
    const[scrolled, setScrolled] = useState(false);
  
    // useEffect( () =>{
    //   const onScroll = () => {
    //     if(window.pageYOffset > 50){
    //       setScrolled(true);
    //     }
    //     else{
    //       setScrolled(false);
    //     }
    //   }
    //   window.addEventListener("scroll",onScroll);
    //   return() => window.removeEventListener("scroll", onScroll);
    // },[])
  
    const onupActLink = (value) => {
      setActiveLink(value);
    }
    return(
    <nav class="navbar navbar-expand-lg navbar-fixed-top navbar-light bg-dark py-0" >
        <a class="navbar-brand text-light" href="#">
        <img src={logo} width="90px" alt="logo" height="70" />
        </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a aria-current="page" href="/" className={activeLink === 'home' ? 'active nav-link text-light px-4': 'nav-link text-info px-4'} onClick={() =>onupActLink('home')}>Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="/skills" className={activeLink === 'skills' ? 'active nav-link px-4': 'nav-link px-4'} onClick={() =>onupActLink('skills')}>Skills</a>
                    </li>
                    <li class="nav-item">
                        <a href="/projects" className={activeLink === 'projects' ? 'active nav-link px-4': 'nav-link px-4'} onClick={() =>onupActLink('projects')}>Projects</a>
                    </li>
                </ul>
            </div>
            <div class="pr-5 mr-10 justify-content-center">
               <span className="navbar-text">
                    <div className="social-icon d-flex flex-row ">
                        <a href="#"><img src={contact} alt="contact" className="contactImg" /></a>
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfpKbQZtSbcHgswjdgPBwSBngRgrbXNbdjVcBZfZJccZRkfcbmngzsLQXtwKPnVrdkjDZg"><img src={gmail} width="20px" alt="gmail" className="gmailImg" /></a>
                        <a href="https://www.linkedin.com/in/nikita"><img src={linkedIn} width="20px" alt="linkedin" className="linkedImg"/></a>
                    </div>
                    <div className='btn'>
                    <button className="vvd text-light pr-5" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </div>
                </span>
             </div>
    </nav>
    )
}