const WebSocket = require("ws")
const PORT = 3001
const games = {}
/*
_________________________________________________________________________ 
|                                                                       |
|                                                                       |
|         TODO: Почитай все мои комменты и изучи логику сервака         |
|         Я чуть что ещё на парах тебе могу подсказать что да как       |
|                                                                       |       
|_______________________________________________________________________|
*/


function start() {
    const ws = new WebSocket.WebSocketServer({port: PORT}, () => {
        console.log(`WebSocket server is running on port 3001`)
    })

    ws.on('connection', (wsClient) => {
        // Когда клиент подключается к 3001 порту, он попадает в эту прослушку 
        wsClient.on('message', async(message) => {
            // Тут я вешаю на каждого пользователя прослушку message. Это короче чтобы если пользователь чё то делает на фронте, то это "чё то" будет залетать сюда. Обязательно async, чтобы  
            const req = JSON.parse(message.toString())
            if (req.event == 'connect') {
                // Если в этом req поле event == 'connect', то мы инициализируем новую игру с username-клиентом
                wsClient.nickname = req.playroad.username
                initGames(wsClient, req.playroad.gameId)
            }
    
            // broadcast(req)
        })
    })

    /*
        Шаблон объекта games из 3 строки:
        games = 
        {
            '32423423': [
                ws1: {...}
                ws2: {...}
            ],
            '34141241': [
                ws3: {...}
                ws4: {...}
            ],
            ...
            'gameId': [
                player1,
                player2
            ]

            То есть если ты не вкатываешь, то games - это объкт, в котором хранятся множества всех запущенных конкретно сейчас игр. Каждая игра сожержит в себе 2 игрока. 
        }
    */

    function initGames(ws, gameId) {
        // Как ты понял из названия, тут мы инициализируем игру. Тут содержится 3 различных случая. 
        // 1) Когда ещё нет gameId. Тогда мы gameId присваиваем новый массив клиента, который к нам подключется 
        // 1) Когда игра уже есть, но в ней мень 2х игроков. Тогда мы обращаемся к этой комнате и добавляем клиента
        // 1) Когда 2 игрока, и один из них решил, например, перезагрузить страницу. Тогда он просто переподключается к этой комнате
        if(!games[gameId]) {
            games[gameId] = [ws]
        }

        if (games[gameId] && games[gameId]?.length < 2) {
            games[gameId] = [...games[gameId], ws]
        }
        if (games[gameId] && games[gameId].length === 2) {
            games[gameId] = games[gameId].filter(wsc => wsc.nickname !== ws.nickname) 
            games[gameId] = [...games[gameId], ws]
        }
    }

    function broadcast() {
        // Тут мы будет отправлять каждому подключенному клиенту ответ в зависимости от "состояния" клиента
    }
}

start()

/*
    Короче будем юзать websocket для бэка, а не express
*/