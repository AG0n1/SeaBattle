function HandlerLogin() {
    const style = {
        display: "none"
    }
    return (
        <div className="HandlerLogin">
            <label htmlFor="nameInput">Имя</label>
            <input type="text" id="nameInput" required/><br/><br/>

            <label>Выберите действие:</label><br/>
            <input type="radio" id="createGame" required/>
            <label htmlFor="createGame">Создать игру</label><br/>
            <input type="radio" id="joinGame" required/>
            <label htmlFor="joinGame">Подключиться к существующей игре</label><br/><br/>

            <div id="gameIdInput" style={style}>
                <label htmlFor="gameId">Введите GameID:</label>
                <input type="text" id="gameId" /><br/><br/>
            </div>

            <div id="gameCreationInfo" style={style}>
                <p>Ура</p>
            </div>

            <button type="submit">Зарегистрироваться</button>
        </div>
    );
}

export default HandlerLogin;