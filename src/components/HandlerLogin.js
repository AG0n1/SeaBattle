import React, { useState } from "react";
import { Link } from 'react-router-dom';
import login from "./gamescreen/gamezone/img/Login.png"
import start from "./gamescreen/gamezone/img/Start.png"
import { useNavigate } from 'react-router-dom';



function HandlerLogin() {
    const [displayCreate, setDisplayCreate] = useState("none")
    const [displayConnect, setDisplayConnect] = useState("none")
    const [displayAlert, setDisplayAlert] = useState("none")
    const [gameId, setGameId] = useState(generateGameId()); 
    const [copied, setCopied] = useState(false);
    const [createOrConnect, setCreate] = useState('')
    const navigate = useNavigate()
    function generateGameId() {
        const symbols = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        let gameId = "";
        for (let i = 0; i < 8; i++) {
            gameId += symbols[Math.floor(Math.random() * 36)];
        }
        return gameId;
    }

    const openCreate = () => {
        setCreate('create')
        if (displayConnect === "block") {
            setDisplayConnect("none")
        }
        setDisplayCreate("block")
    }

    const openConnect = () => {
        setCreate('connect')
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
            localStorage.setItem("name", nameInput.value)
            switch (createOrConnect) {
                case 'create':
                    try {
                        localStorage.setItem("gameId", gameId.toString())
                        fetch('http://localhost:3001/createGame', {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": `Bearer ${localStorage.getItem('token')}` 
                            },
                            body: JSON.stringify({ gameId: gameId, name: nameInput.value })
                        })
                        .catch(err => console.log(err))
                        navigate('/setShips')
                    } catch(err) {
                        console.log(err)
                    }
                    break
                case 'connect':
                    console.log(111)
                    let val = document.getElementById('getVal')
                    fetch('http://localhost:3001/connectToGame', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${localStorage.getItem('token')}` 
                        },
                        body: JSON.stringify({ gameId: val.value, name: nameInput.value })
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (!data.isFind) {
                            e.preventDefault();
                            alert('Game was not found!')
                        } else {
                            console.log(data.isFind)
                            navigate('/setShips')
                        }
                    })
                    break;
                default:
                    return
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
            {/*<div className="LoginTitle">*/}
            {/*    Login*/}
            {/*</div>*/}
            <div className="LoginTitle">
                <img src={login} className="Login"/>
            </div>
            <input placeholder="Введите Ваше имя" type="text" className="inp" id="nameInput" required/>


            <button className="btn reateGame" onClick={openCreate}>Создать игру</button>
            <button className="btn joinGame" onClick={openConnect}>Подключиться к существующей игре</button>

            <div className="space">
                <div id="gameIdInput" style={styleCreate}>
                    {copied ? (
                        <span id="spanForGameId">
                            {gameId}
                            <div className="copiedText">Скопировано</div>
                        </span>
                    ) : (
                        <span onClick={() => {
                            navigator.clipboard.writeText(gameId);
                            setCopied(true);
                        }}>
                            {gameId}
                        </span>
                    )}
                </div>


                <div id="gameCreationInfo" style={styleConnect}>
                    <input className="inp" id="getVal" placeholder="Введите идентификатор игры"/>
                </div>
            </div>

            <button onClick={checkData} className="play">
                <img src={start} className="PlayImg"/>
            </button>

            <div className="alert" style={styleAlert}>
                <div className="alertBlock" onClick={closeAlert}>
                    Вам нужно ввести своё имя или выбрать: присоединиться или создать игру?
                </div>
            </div>
        </div>
    );
}

export default HandlerLogin;