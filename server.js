const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

var path = require('path');
var fs = require('fs')

// app.get('/', (req, res) => {
//   res.send('Hello from Express!');
// });

app.use(express.static('public'));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname,"docker.html"));
});
app.get('/profile-picture',function(req,res){
  try{
        // const imagePath = path.join(__dirname, 'public','jococups.png');
        var img = fs.readFileSync('./public/jococups.png')
        res.writeHead(200,{'content-type':'image/png'})
        res.end(img,'binary');
        
          // var img = fs.readFileSync('profile-1.jpg');
          // res.writeHead(200,{'Content-Type': 'image/png'});
          // res.end(img,'binary');
  } catch(err){
      res.status(400).send("Image not Found")
  }
})
app.get('/kosi',function(req,res){
  res.send("Welcome to kosi!!!")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//This is how to create a server and run a server from scratch

// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.end('Hello from Node on the VM');
// });

// server.listen(PORT, () => {
//   console.log(`Server running on ${PORT}`);
// });

