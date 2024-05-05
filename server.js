const express = require('express');
const cors = require('cors')
const http = require('http');
const path = require('path');
const events = require('events')
const localtunnel = require('localtunnel');

const emitter = events.EventEmitter()

const app = express();
app.use(cors());
app.use(express.json())
const server = http.createServer(app);

class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y
    }
}

let point1 = new Point(1,2)
let point2 = new Point(1,3)
let points = [point1, point2]
console.log(points)

// TEST CASES!!!!!!!!
const positions = {
    0: {type: 'double', x: 2, y: 8},
    1: {type: 'single', x: '1', y: '8'},
    2: {type: 'single', x: '0', y: '8'},
    3: {type: 'single', x: '1', y: '9'},
    4: {type: 'single', x: '0', y: '9'},
    5: {type: 'double', x: 5, y: 5},
    6: {type: 'double', x: 3, y: 5},
    7: {type: 'triple', x: 5, y: 1},
    8: {type: 'triple', x: 5, y: 1},
    9: {type: 'ultimate', x: 5, y: 1},
}

const ableToHit = () => {
    positions.forEach(element => {
        switch(element.type) {
            case "double":
                break;
            
            case "tripple":
                break;
            
            case "ultimate":
                break;
        }
    });
}

let games = {
    
}

app.post('/createGame', (req, res) => {
    console.log(req.body)
    let {gameId} = req.body,
        {name} = req.body
    games[gameId] = {
        [name]: {
            isReady: false,
            pos: {
                
            }
        }
    }
})

app.post('/connectToGame', (req, res) => {
    let { gameId } = req.body,
        { name } = req.body;

    const game = games[gameId];
    if (game) {
        console.log('Game found:', game);
        res.json({isFind: true})

        games[gameId][name] = {
            isReady: false,
            pos: {
                
            }
        }
    } else {
        res.json({isFind: false})
    }
});

app.get('/shoot', (req,res) => {
    emitter.once('newMessage', (message) => {
        res.json(message)
    })
})

app.post('/step', (req, res) => {
    const msg = req.body
    emitter.emit('newMessage', )
    res.status(200)
})

app.get('/api', (req, res) => {
    res.json(points)
})

app.post('/api', (req, res) => {

})

app.listen(3001, () => {
    console.log("Сервер работает на 3001")
})

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// const port = process.env.PORT || 3001;
// server.listen(port, async () => {
//     console.log(`Сервер запущен на порте ${port}`);

//     const tunnel = await localtunnel({ port });
//     console.log(`Проект доступен по ссылке: ${tunnel.url}`);

//     server.on('close', () => {
//         tunnel.close();
//     });
// });