import YatchukAndrey from "./gamezone/YatchukAndrey"
import BazevichDavid from "./gamezone/BazevichDavid"
import BoltrushkoOlga from "./gamezone/BoltrushkoOlga"
import { Link} from 'react-router-dom';

function IvanEpisko() {

    return (
        <div className="playy">
            <div className="ivanEpishko">
                <YatchukAndrey display="none"/>
                <BoltrushkoOlga />
            </div>
        </div>
    )
}

export default IvanEpisko