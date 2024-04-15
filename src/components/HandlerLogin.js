import { useState } from "react";
import { Link } from 'react-router-dom';

function HandlerLogin() {
    const [displayCreate, setDisplayCreate] = useState("none")
    const [displayConnect, setDisplayConnect] = useState("none")
    const [displayAlert, setDisplayAlert] = useState("none")

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

    const checkData = (e) => {
        const nameInput = document.getElementById("nameInput")
        if (displayConnect == displayCreate || nameInput.value == "") {
            e.preventDefault()
            setDisplayAlert("flex")
        }
    }

    const closeAlert = () => {
        setDisplayAlert("none")
    }

    const styleCreate = {
        display: displayCreate
    }

    const styleConnect = {
        display: displayConnect
    }

    const styleAlert = {
        display: displayAlert
    }
    

    return (
        <div className="HandlerLogin">
            <div className="LoginTitle">
                Login
            </div>
            <input placeholder="Введите Ваше имя" type="text" className="inp" id="nameInput" required/>


            <button className="btn reateGame" onClick={openCreate} >Создать игру</button>
            <button className="btn joinGame" onClick={openConnect}>Подключиться к существующей игре</button>
            
            <div className="space">
                <div id="gameIdInput" style={styleCreate}>
                    Ура!
                </div>

                <div id="gameCreationInfo" style={styleConnect}>
                    <input className="inp" placeholder="Введите идентификатор игры" />
                </div>
            </div>
            
            <Link onClick={checkData} className="play" to="play">Играть</Link>

            <div className="alert" style={styleAlert}>
                <div className="alertBlock" onClick={closeAlert}>
                    Вам нужно выбрать: присоединиться или создать игру?
                </div>
            </div>
        </div>
    );
}

export default HandlerLogin;