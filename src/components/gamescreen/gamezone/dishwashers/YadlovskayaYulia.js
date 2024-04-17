import logo from "../img/spaceships/single.png"

function YadlovskayaYulia() {
    const handleOnDrag = (e, str) => {
        localStorage.setItem(str, e.toString())
    }
    return (
        <div className="ship-section">
            <div className="single">
                <img draggable onDragStart={(e) => handleOnDrag(e, "single")} src={logo} />
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