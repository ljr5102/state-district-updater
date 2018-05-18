const express = require('express')
const http = require('http')
const app = express();
const path = require('path')

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.listen(process.env.PORT || 3000, () => console.log('listening at 3000...'))
