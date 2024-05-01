import React, {useState} from 'react';
import YatchukAndrey from './gamescreen/gamezone/YatchukAndrey';
import BazevichDavid from './gamescreen/gamezone/BazevichDavid';

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

            <YatchukAndrey display="" positions="" />

            <BazevichDavid />
        </div>
    );
}

export default App