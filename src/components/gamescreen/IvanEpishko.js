import YatchukAndrey from "./gamezone/YatchukAndrey"
import BazevichDavid from "./gamezone/BazevichDavid"
import BoltrushkoOlga from "./gamezone/BoltrushkoOlga"
import { Link} from 'react-router-dom';
import single from "./gamezone/img/spaceships/single.png";
import double from "./gamezone/img/spaceships/double.png";
import triple from "./gamezone/img/spaceships/tripple.png";
import ultimate from "./gamezone/img/spaceships/ultimate.png";
import React from "react";

function IvanEpisko() {
    let singleHide = document.getElementsByClassName('singlePlace')
    let doubleHide = document.getElementsByClassName('doublePlace')
    let tripleHide = document.getElementsByClassName('triplePlace')
    let ultimateHide = document.getElementsByClassName('ultimatePlace')
    const start = (e) => {
        let arr = e.dataTransfer.getData("positions")
        let pos = JSON.parse(arr)
        console.log(pos)
    }

    return (
        <div className="playy">
            <div className="ivanEpishko">
                <YatchukAndrey display="none"/>
                <BoltrushkoOlga/>
            </div>
            <button onClick={start} >play</button>

            <div className='displayNone hide singlePlace ship'>
                <img src={single}/>
            </div>
            <div className='displayNone hide singlePlace ship'>
                <img src={single}/>
            </div>
            <div className='displayNone hide singlePlace ship'>
                <img src={single}/>
            </div>
            <div className='displayNone hide singlePlace ship'>
                <img src={single}/>
            </div>

            <div className='displayNone hide doublePlace'>
                <img src={double}/>
            </div>
            <div className='displayNone hide doublePlace'>
                <img src={double}/>
            </div>
            <div className='displayNone hide doublePlace'>
                <img src={double}/>
            </div>

            <div className='displayNone hide triplePlace'>
                <img src={triple}/>
            </div>
            <div className='displayNone hide triplePlace'>
                <img src={triple}/>
            </div>

            <div className='displayNone hide ultimatePlace'>
                <img src={ultimate}/>
            </div>
        </div>
    )
}

export default IvanEpisko