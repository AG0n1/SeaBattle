import { useState } from "react";

function HandlerLogin() {
    

    const [displayCreate, setDisplayCreate] = useState("none")
    const [displayConnect, setDisplayConnect] = useState("none")
    const openCreate = () => {
        if (displayConnect === "block") {
            setDisplayConnect("none")
        }
        setDisplayCreate("block")
    }
    const openConnect = () => {
        if (displayCreate === "block") {
            setDisplayCreate("none")
        }
        setDisplayConnect("block")
    }
    const styleCreate = {
        display: displayCreate
    }
    const styleConnect = {
        display: displayConnect
    }
    return (
        <div className="HandlerLogin">
            <div className="LoginTitle">
                Login
            </div>
            <input type="text" className="inp" id="nameInput" required/><br/><br/>

            <div className="chooseText" >
                Выберите действие
            </div>

            <button className="btn reateGame" onClick={openCreate} >Создать игру</button>
            <button className="btn joinGame" onClick={openConnect}>Подключиться к существующей игре</button>

            <div id="gameIdInput" style={styleCreate}>
                Ура!
            </div>

            <div id="gameCreationInfo" style={styleConnect}>
                <input className="inp" placeholder="Введите идентификатор игры" />
            </div>
        </div>
    );
}

export default HandlerLogin;