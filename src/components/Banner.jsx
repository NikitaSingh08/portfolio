import { useState, useEffect } from "react";
import niks1 from "../components/Assets/niks1.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { NavLink } from 'react-router-dom';
import './banner.css';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDel, setIsDel] = useState(false);
    const toRotate = ["This is Nikita Singh!"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() *100);
    const period = 1000;
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate('/Resume');
    //   };

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i= loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDel ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDel) {
            setDelta(prevDelta => prevDelta/2)
        }
         if(!isDel && updatedText === fullText){
            setIsDel(true);
            setDelta(period);
            }
            else if(isDel && updatedText===''){
                setIsDel(false);
                setLoopNum(loopNum+1);
                setDelta(500);
         }
    }
  
    return(
       <section className="banner" id="home">
        <div class ="container">
            <div class="row align-items-center">
                <div class="col pr-90px">
                <TrackVisibility>
                {({ isVisible }) =>
                <div className= {isVisible? "animate__animated animate__fadeIn" : ""}>
                <NavLink to="/Resume" >
                <div className="tagline">Welcome to my Portfolio </div></NavLink>
                        <h1 class="text-white">{'Hey..'}
                        <span className="wrap">{text}</span>
                        </h1>
                        <p>A fourth year under graduate in Information Technology , a competetive programmer, a creative and tech-savvy Web Developer and a bit too much interested Frontend Developer.</p>
                        <button onClick={() => console.log('connect')}>Let's connect</button>
                    </div>}
                </TrackVisibility>
                </div>
                <div class="col xs-12 md-6 xl-5">
                    <img src={niks1} width="350px" alt="image" className="headerImg"/>
                </div>
            </div>
        </div>
       </section>
    )
}