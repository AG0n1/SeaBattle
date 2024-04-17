import logo from "../img/spaceships/single.png"

function YadlovskayaYulia() {
    const handleOnDrag = (e, str) => {
        console.log(1)
    }
    return (
        <div className="ship-section">
            <div className="single">
                <img  draggable onDragStart={(e) => handleOnDrag(e, "single")} src={logo} />
            </div>
            <div className="single">
                <img  draggable onDragStart={(e) => handleOnDrag(e, "single")} src={logo} />
            </div>
            <div className="single">
                <img  draggable onDragStart={(e) => handleOnDrag(e, "single")} src={logo} />
            </div>
            <div className="single">
                <img  draggable onDragStart={(e) => handleOnDrag(e, "single")} src={logo} />
            </div>
        </div>
    )
}

export default YadlovskayaYulia