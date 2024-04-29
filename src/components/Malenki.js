import video from "./video/Intro.mp4"
import playButton from "./gamescreen/gamezone/img/Button.jpg"
import IvanEpishko from "./gamescreen/IvanEpishko"
import {Link} from "react-router-dom";

function Malenki(props) {
    const playVideo = () => {
        let video = document.getElementById('vidos');
        video.play();
        document.querySelector('.playButton').classList.add('playing');
        document.querySelector('.skipButton').classList.add('playing');
    }
    return (
        <div className="video" onclick="this.querySelector('video').play()">
            <video src={video} id="vidos" autoPlay></video>
            <button className="playButton" onClick={playVideo}><img src={playButton} class="playButtonImage"/>
            </button>
            <Link to="../play" className="skipButton">Skip</Link>
        </div>
    )
}

export default Malenki