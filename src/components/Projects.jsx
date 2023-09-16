import  ProjectCard  from "./ProjectCard";
import pdata from "./ProjData";
import 'animate.css';
import './projects.css'
import TrackVisibility from 'react-on-screen';
export const Projects = () =>{
    return(
        <section className="projects" id="projects">
            <div class ="container">
                <div class="row align-items-center">
                    <div class="col">
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className= {isVisible? "animate__animated animate__fadeIn" : ""}>
                        <h2>Projects</h2>
                        <p>These are some projects I have made which included my technical skills, creativity and understanding. Some of them are group projects which involved collaboration with others, with addition to technical skills 
                        also it required Team-Work, Communication Skills and Leadership Quality.</p>
                    
                        <div class= "tab-container" id="projects-tabs" defaultActiveKey='first'>
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Description</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                            </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div class="row">
                                    {
                                        pdata.map((project, index) => {
                                        return(
                                            <ProjectCard
                                            key = {project.id}
                                            title = {project.title}
                                            description = {project.Description}
                                            imgUrl={project.imgUrl}
                                            />
                                        )
                                    })
                                    }
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            
                            </div>
                            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                            </div>
                        </div>
                        </div>}
                         </TrackVisibility>
                    </div>
                        
                </div>
             
            </div>
        </section>
    )
}

