import EletsDarya from "./dishwashers/EletsDarya"
import GorbachMaria from "./dishwashers/GorbachMaria"
import PavlushkoPolina from "./dishwashers/PavlushkoPolina"
import YadlovskayaYulia from "./dishwashers/YadlovskayaYulia"

function BazevichDavid() {
    return (
        <div className="shipsField">
            <EletsDarya />
            <PavlushkoPolina />
            <YadlovskayaYulia />
            <GorbachMaria />
        </div>
    )
}

export default BazevichDavid