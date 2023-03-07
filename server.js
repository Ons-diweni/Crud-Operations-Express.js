//loads .env file contents into process.env
require('dotenv').config()

//import http module
const http = require('http')



//make server instance
const server = http.createServer()
server.listen(process.env.PORT , ()=> console.log('server runnig with port '+process.env.PORT))
