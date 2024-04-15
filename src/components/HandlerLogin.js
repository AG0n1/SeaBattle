import { useState } from "react";
import { Link } from 'react-router-dom';

function HandlerLogin() {
    const [displayCreate, setDisplayCreate] = useState("none")
    const [displayConnect, setDisplayConnect] = useState("none")
    const [displayAlert, setDisplayAlert] = useState("none")
    const [gameId, setGameId] = useState(generateGameId()); 
    const [copied, setCopied] = useState(false);

    function generateGameId() {
        const symbols = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        let gameId = "";
        for (let i = 0; i < 16; i++) {
            gameId += symbols[Math.floor(Math.random() * 36)];
        }
        return gameId;
    }

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
        if (displayConnect === displayCreate || nameInput.value === "") {
            e.preventDefault()
            setDisplayAlert("flex")
        } else {
            try {
                localStorage.setItem("gameId", gameId.toString())
            } catch(err) {
                console.log(err)
            }
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
                    {copied ? (
                        <span id="spanForGameId">
                            {gameId}
                            <div className="copiedText">Скопировано</div>
                        </span>
                    ) : (
                        <span onClick={() => { navigator.clipboard.writeText(gameId); setCopied(true); }}>
                            {gameId}
                        </span>
                    )}
                </div>


                <div id="gameCreationInfo" style={styleConnect}>
                    <input className="inp" placeholder="Введите идентификатор игры" />
                </div>
            </div> 

            <Link onClick={checkData} className="play" to="play">Играть</Link>

            <div className="alert" style={styleAlert}>
                <div className="alertBlock" onClick={closeAlert}>
                    Вам нужно ввести своё имя или выбрать: присоединиться или создать игру?
                </div>
            </div>
        </div>
    );
}

export default HandlerLogin;