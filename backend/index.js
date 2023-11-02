require("dotenv").config();
const connectTOMongo = require('./db');
const express = require('express');
var cors =require("cors");
const path = require('path');

connectTOMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())


// Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client', 'build')));

// // Handle any other routes by serving the React app
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
// });

app.use(express.json())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})