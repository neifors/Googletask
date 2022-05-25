const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const server = express();
server.use(bodyParser.json())
server.use(cors())

const port = process.env.PORT || 3000;

const googleRoutes = require('./controllers/controllers');
server.use('/google', googleRoutes);

server.listen(port, () => console.log(`Server running from http://localhost:${port}`))
