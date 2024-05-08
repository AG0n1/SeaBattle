const express = require('express');
const cors = require('cors');
const http = require('http');
const path = require('path');
const events = require('events');
const localtunnel = require('localtunnel');

const emitter = events.EventEmitter();

const app = express();
app.use(cors());
app.use(express.json());
const server = http.createServer(app);

app.use((req, res, next) => {
    console.log(`User connected: ${req.method} ${req.url}`);
    next();
});

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.pointsArr = [];
    }

    createPointsArr(positions) {
        for (const key in positions) {
            if (Object.hasOwnProperty.call(positions, key) && key !== "name" && key !== "gameId") {
                const { type, x, y } = positions[key];
                if (type === 'double') {
                    this.pointsArr.push({ x: Number(x), y: Number(y) });
                    this.pointsArr.push({ x: Number(x), y: Number(y) + 1 });
                } else if (type === 'triple') {
                    this.pointsArr.push({ x: Number(x), y: Number(y) });
                    this.pointsArr.push({ x: Number(x), y: Number(y) + 1 });
                    this.pointsArr.push({ x: Number(x), y: Number(y) + 2 });
                } else if (type === 'ultimate') {
                    this.pointsArr.push({ x: "Here is ultimate" });
                    for (let i = 0; i < 3; i++) {
                        for (let j = 0; j < 4; j++) {
                            this.pointsArr.push({ x: Number(x) + i, y: Number(y) + j });
                        }
                    }
                    this.pointsArr.push({ x: "Here is ultimate" });
                } else {
                    this.pointsArr.push({ x: Number(x), y: Number(y) });
                }
            }
        }
        
        return this.pointsArr;
    }
}

const point = new Point();

let games = {};

app.post('/createGame', (req, res) => {
    let { gameId } = req.body,
        { name } = req.body;
    games[gameId] = {
        [name]: {
            isReady: false,
            pos: {}
        }
    };
    res.send(`Game created with ID: ${gameId}`);
});

app.post('/connectToGame', (req, res) => {
    let { gameId, name } = req.body;
    if (games[gameId]) {
        console.log('Game found:', games[gameId]);
        games[gameId][name] = {
            isReady: false,
            pos: {}
        };
        res.json({ isFind: true, gameData: games[gameId] });
    } else {
        res.json({ isFind: false, message: 'Game not found' });
    }
});

app.post('/getPositions', (req, res) => {
    let { gameId, name, positions } = req.body;
    games[gameId][name].pos = point.createPointsArr(positions);
    res.json({ message: 'Positions updated successfully', gameData: games[gameId] });
});

app.get('/shoot', (req, res) => {
    let { id } = req.query;
    emitter.once('newMessage', (message) => {
        res.json(message);
    });
});

app.post('/step', (req, res) => {
    const msg = req.body;
    emitter.emit('newMessage', msg);
    res.status(200).json({ message: 'Step executed successfully' });
});

app.get('/api', (req, res) => {
    res.json(games);
});

app.post('/api', (req, res) => {
    console.log(req.body);
});

app.use(express.static(path.join(__dirname, 'build')));

// app.listen(3001, () => {
//     console.log("server is running on port 3001")
// })

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;
server.listen(port, async () => {
    console.log(`Server running on port ${port}`);

    const tunnel = await localtunnel({ port });
    console.log(`Project is accessible at: ${tunnel.url}`);

    server.on('close', () => {
        tunnel.close();
    });
});
