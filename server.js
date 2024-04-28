const express = require('express');
const http = require('http');
const path = require('path');
const localtunnel = require('localtunnel');

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
server.listen(port, async () => {
    console.log(`Сервер запущен на порте ${port}`);

    const tunnel = await localtunnel({ port });
    console.log(`Проект доступен по ссылке: ${tunnel.url}`);

    server.on('close', () => {
        tunnel.close();
    });
});
