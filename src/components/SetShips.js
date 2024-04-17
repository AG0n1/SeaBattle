import BazevichDavid from "./gamescreen/gamezone/BazevichDavid";
import YatchukAndrey from "./gamescreen/gamezone/YatchukAndrey";
import { Link } from "react-router-dom";

function SetShips() {
    return (
        <div className = "setShips" >
            <div className="setField">
                <YatchukAndrey />
            </div>
            <BazevichDavid />

            <Link style={{position: "absolute", top: "0", left: "0", fontSize: "20px", color: "white"}} to="../play">
                Далее
            </Link>
        </div>
    )
}

export default SetShips