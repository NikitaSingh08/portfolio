import React from "react";
import './style.css'
import dp from "./Assets/dp.jpeg";
import contactImg from "./Assets/add-contact.png";
import emailImg from "./Assets/gmail.png";
import linkdImg from "./Assets/linkedin.png";
const Resume =()=>{
    return(
        <>
        <div></div>
        <div className="left">
        <div>
            <img src={dp} alt="img" className="pic" ></img>
            <h4 className="contact">Contact </h4>
            <img src={contactImg} width="20px"></img> - 8830020981<br></br>
            <img src={emailImg} width="20px"></img> - nikitasingh140841@gmail.com <br></br>
            <img src={linkdImg} width="20px"></img> - https://www.linkedin.com/in/nikita
        </div>
        <hr></hr>
        <div className="progProfiles">
        <h4 className="progProfiles">Programming Profiles</h4>
        <h6 className="progProfiles">leetcode : 
        <a href="https://leetcode.com/nikita_singh_14/" className="linkedImg" >  https://leetcode.com/nikita_singh_14/</a>
        </h6>
        <h6 className="progProfiles">codechef: </h6>
        </div>
        <hr></hr>
        <div>
        <h4 className="progProfiles">Technical Skills</h4>
        <h5 className="progProfiles">Languages</h5>
        <ul>
            <li>C</li>
            <li>C++</li>
            <li>JAVA</li>
        </ul>
        
        <h5 className="progProfiles">Development Skills</h5>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>ReactJs</li>
        </ul>
        <h5 className="progProfiles">Databases</h5>
        <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Firebase</li>
        </ul>
        </div>
     <hr></hr>
         <div>
        <h4 className="progProfiles">Course Work</h4> 
        <ul>
            <li>Computer Networks</li>
            <li>Database Management System</li>
            <li>Object Oriented Programming</li>
        </ul>
        </div>
        <hr></hr>
        <div>
        <h4 className="progProfiles">Hobbies</h4> 
        <ul>
            <li>Table Tennis</li>
            <li>Dancing</li>
        </ul>
     </div>
     </div>
        <div class="main-right">
            <div>
                <br></br><br></br>
                <h1 className="right-header">NIKITA SINGH</h1>
                <p className="header-desc">Information Technology Undergraduate.<br></br>
                A creative Web Developer and Competitive Programmer</p>
            </div>
             <div>
                <hr></hr>
                <h3 className="progProfiles">Education Background</h3>
                <h5 className="progProfiles">B.Tech in Information Technology</h5>
                <p className="progProfiles">Government College Of Engineering, Karad</p>
                <h5 className="progProfiles">10th std (CBSE)</h5>
                <p>Army Public School, Pune</p>
                <h5 className="progProfiles">12th std (CBSE)</h5>
                <p>Army Public School, Pune</p>
                <hr></hr>
            </div>
            <div>
                <h3 className="progProfiles">Projects</h3>
                <h5 className="progProfiles">Data Science with Python</h5>
                <p>Used various platforms like Jupyter, Rstudio, Spyder etc for data visualizations and predictions.
                    Worked on various datasets like Iris and Diabetes, Boston house pricing, Salary and 
                    Work-Experience of employees etc.
                </p>
                <h5 className="progProfiles">Auto-Attendance Application</h5>
                <p>Flutter-based android application, used Firebase as the database.
                     Automatically records the attendance of students and mark them as Present 
                     if they are in hostel premises or else Absent.
                </p>
                <h5 className="progProfiles">Banking Management System</h5>
                <p>A simple management system built using C++ language. 
                    It keeps track of all the accounts created, updated, deleted etc.
                </p>
                <h5 className="progProfiles">BookGeeks</h5>
                <p>A web application for book/novel readers made using ReactJs and mongoDB.</p>
            </div>
            <hr></hr> 
            <div>
                <h3 className="progProfiles">Area of Interests</h3>
                <ul>
                    <li>Web Development</li>
                    <li>Android Development (using flutter)</li>
                    <li>Competitive Programming</li>
                </ul>
             </div>
             <hr></hr>
             <div>
                <h3 className="progProfiles">Positions of Resposibility</h3>
                <ul>
                    <li>Dais Organising Committee Member</li>
                    <li>Cultural Head of Information Techonology Student Association (ITSA)</li>
                    <li>Magazine Committee member and Hindi section head</li>
                    <li>Table-Tennis Coordinator of college Sports Fest 2023</li>
                </ul>
             </div>
            </div>
     </>
    )
};
export default Resume;