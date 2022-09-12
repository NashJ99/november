const express = require('express')
const app = express()
const path = require('node:path')

console.log('hello from node');

app.get('/', function (req, res) {
  //res.send('Hello World from Express')
  res.sendFile(path.join(_dirname, 'index.html'));
})

app.listen(process.env.PORT || 3000, 
	() => console.log("server running"));