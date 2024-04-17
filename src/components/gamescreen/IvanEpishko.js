import YatchukAndrey from "./gamezone/YatchukAndrey"
import BazevichDavid from "./gamezone/BazevichDavid"
import BoltrushkoOlga from "./gamezone/BoltrushkoOlga"
import { Link} from 'react-router-dom';

function IvanEpisko(props) {
    return (
        
        <div className="playy">
            <Link className="back" to="/" >Назад</Link>
            <div className="ivanEpishko">
                <YatchukAndrey singles={1} />
                <BoltrushkoOlga />
            </div>
        </div>
        
    )
}

export default IvanEpisko