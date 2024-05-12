import YatchukAndrey from "./gamezone/YatchukAndrey"
import BazevichDavid from "./gamezone/BazevichDavid"
import BoltrushkoOlga from "./gamezone/BoltrushkoOlga"
import { Link} from 'react-router-dom';
import single from "./gamezone/img/spaceships/single.png";
import double from "./gamezone/img/spaceships/double.png";
import triple from "./gamezone/img/spaceships/tripple.png";
import ultimate from "./gamezone/img/spaceships/ultimate.png";
import { shipData } from "./gamezone/YatchukAndrey";
import React, {useState} from "react";
import UserContext from "../Context";

function IvanEpisko() {
    const ContextType = UserContext
    console.log(ContextType.Consumer)

    let singleHide = document.getElementsByClassName('singlePlace')
    let doubleHide = document.getElementsByClassName('doublePlace')
    let tripleHide = document.getElementsByClassName('triplePlace')
    let ultimateHide = document.getElementsByClassName('ultimatePlace')

    const [singleCounter, setSingle] = useState(0)
    const [doubleCounter, setDouble] = useState(0)
    const [tripleCounter, setTriple] = useState(0)
    const [ultimateCounter, setUltimate] = useState(0)

    // shipData.forEach((ship) => {
    //     const {type, x, y} = ship;
    //     switch (type) {
    //         case 'single':
    //             singleHide[singleCounter].classList.remove('displayNone')
    //             singleHide[singleCounter].style.top = `${(parseInt(x) * 50) + 50}px`
    //             singleHide[singleCounter].style.left = `${(parseInt(y) * 50) + 50}px`
    //             setSingle(singleCounter + 1)
    //             break;
    //         case 'double':
    //             doubleHide[doubleCounter].classList.remove('displayNone')
    //             doubleHide[doubleCounter].style.top = `${(parseInt(x) * 50) + 50}px`
    //             doubleHide[doubleCounter].style.left = `${(parseInt(y) * 50) + 50}px`
    //             setDouble(doubleCounter + 1)
    //             break;
    //         case 'triple':
    //             tripleHide[tripleCounter].classList.remove('displayNone')
    //             tripleHide[tripleCounter].style.top = `${(parseInt(x) * 50) + 50}px`
    //             tripleHide[tripleCounter].style.left = `${(parseInt(y) * 50) + 50}px`
    //             setTriple(tripleCounter + 1)
    //             break;
    //         case 'ultimate':
    //             ultimateHide[ultimateCounter].classList.remove('displayNone')
    //             ultimateHide[ultimateCounter].style.top = `${(parseInt(x) * 50) + 50}px`
    //             ultimateHide[ultimateCounter].style.left = `${(parseInt(y) * 50) + 50}px`
    //             setUltimate(ultimateCounter + 1)
    //             break;
    //         default:
    //             break;
    //     }
    // })


    return (
        <div className="playy">
            <div className="ivanEpishko">
                <YatchukAndrey display="none"/>
                <BoltrushkoOlga/>
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