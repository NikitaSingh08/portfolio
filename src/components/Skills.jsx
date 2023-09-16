import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import skill1 from "../components/Assets/skills1.png";
import skill2 from "../components/Assets/skill3.png";
import skill3 from "../components/Assets/skill2.png"
import './skills.css'
export const Skills = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <section className="skills" id="home">
        <div class ="container">
            <div class="row align-items-center">
                <div class="col">
                    <div className='skill-bx'>
                        <h2>Skills</h2>
                        <p>Throughout these years have tried to develop some important and useful skills like - some languages skills(C, C++, JAVA), Development Skills(HTML, CSS, ReactJs) & Databases(MySQL, MongoDB, Firebase).</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className='item'>
                            <img src={skill1} width="150px" alt="image"></img>
                                <h5>Front-end Development</h5>
                            </div>
                            <div className='item'>
                            <img src={skill2} width="140px" alt="image"></img>
                                <h5>Back-end Development</h5>
                            </div>
                            <div className='item'>
                            <img src={skill3} width="140px" alt="image"></img>
                                <h5>Android Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
       </section>
    )
}