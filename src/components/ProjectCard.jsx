import React from "react";

function ProjectCard(props){
    return(
        <>
       
        <div class="col">
        <div className="proj-imgbx">
       <img src= {props.imgUrl} alt="pic" className="card_img"></img>
        <div className="proj-txtx">
          <span>{props.title}</span>
          <h4 className="flex flex-row indent-10 text-2xl mt-0 ml-0 mx-4 px-0">{props.description}</h4>
        </div>
    </div>
  </div>
        </>
    )
}
export default ProjectCard;