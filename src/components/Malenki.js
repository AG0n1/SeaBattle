import video from "./video/Intro.mp4"
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
        <div class="video" onclick="this.querySelector('video').play()">
            <video src={video} id="vidos" autoplay></video>
            <button className="playButton" onClick={playVideo}><img src="./components/gamescreen/gamezone/img/Button.jpg" />
            </button>
            <Link to="IvanEpishko" className="skipButton">Skip</Link>
        </div>
    )
}

export default Malenki