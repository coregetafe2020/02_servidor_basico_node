let http = require('http');

http.createServer((req, resp) => {
    resp.writeHead(200, {'Content-Type':'text/html'});
    resp.end('¡Hola Mundo!');
}).listen(8080, () => {
    console.log('Servidor escuchando en http://localhost:8080');
})