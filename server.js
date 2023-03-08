//loads .env file contents into process.env
require('dotenv').config()

//import http module
const http = require('http')
const App = require('./App')

const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};


//make server instance
const server = http.createServer(App)
server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + process.env.PORT;
    console.log('Listening on ' + bind);
});
server.on('request' , (req,res) => {console.log('EndPoint Path :'+req.url)})
server.listen(process.env.PORT)
