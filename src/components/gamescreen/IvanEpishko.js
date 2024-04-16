import YatchukAndrey from "./gamezone/YatchukAndrey"
import BazevichDavid from "./gamezone/BazevichDavid"
import BoltrushkoOlga from "./gamezone/BoltrushkoOlga"
import { Link} from 'react-router-dom';

function IvanEpisko() {
    return (
        
        <div className="ivanEpishko">
            <Link className="back" to="/" >Назад</Link>
            <BoltrushkoOlga />
            <YatchukAndrey />
            <BazevichDavid />
        </div>
    )
}

export default IvanEpisko