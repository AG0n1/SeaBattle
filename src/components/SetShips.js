import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import YatchukAndrey from './gamescreen/gamezone/YatchukAndrey';
import BazevichDavid from './gamescreen/gamezone/BazevichDavid';
import start from "./gamescreen/gamezone/img/Start.png"

function App() {

    const [amount, setAmount] = useState(0)
    const checkState = (e) => {
        if (amount != 0) {
            alert(
                "Разместите верное количество кораблей"
            )
            e.preventDefault()
        }
      }
    return (
        <div className="setShips">
            <div></div>

            <div className="makeSpace">
                <YatchukAndrey />

                <div className='link' id = "makeLinkDNone">
                    <Link onClick={checkState} className='linkToPlay' to="../../play">
                        <img src={start} className="linkToPlayImg" />
                    </Link>
                </div>
            </div>      

            <BazevichDavid />
        </div>
    );
}

export default App