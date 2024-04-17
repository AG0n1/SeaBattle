import YatchukAndrey from "./gamezone/YatchukAndrey"
import BazevichDavid from "./gamezone/BazevichDavid"
import BoltrushkoOlga from "./gamezone/BoltrushkoOlga"
import { Link} from 'react-router-dom';

function IvanEpisko() {
    return (
        
        <div className="playy">
            {/* <Link className="back" to="/" >Назад</Link> */}
            <div className="ivanEpishko">
                <YatchukAndrey />
                <BoltrushkoOlga />
            </div>
        </div>
        
    )
}

export default IvanEpisko