const express = require('express');
const cors = require('cors')
const http = require('http');
const path = require('path');
const localtunnel = require('localtunnel');

const app = express();
app.use(cors());
app.use(express.json())
const server = http.createServer(app);

let games = {

}

app.post('/createGame', (req, res) => {
    console.log(req.body)
    let {gameId} = req.body,
        {name} = req.body
    games[gameId] = {
        name1: name
    }  
})

app.post('/connectToGame', (req, res) => {
    let { gameId } = req.body,
        { name } = req.body;

    const game = games[gameId];
    if (game) {
        console.log('Game found:', game);
        res.json({isFind: true})

        games[gameId].name2 = name
    } else {
        res.json({isFind: false})
    }
});

app.get('/api', (req, res) => {
    res.json(games)
})

app.post('/api', (req, res) => {

})

// app.listen(3001, () => {
//     console.log("Сервер работает на 3001")
// })

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;
server.listen(port, async () => {
    console.log(`Сервер запущен на порте ${port}`);

    const tunnel = await localtunnel({ port });
    console.log(`Проект доступен по ссылке: ${tunnel.url}`);

    server.on('close', () => {
        tunnel.close();
    });
});