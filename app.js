var express = require('express');

const app = express();
const path = require('path');
const fs = require("fs");

var normalizedPath = path.join(__dirname, "first/js");

// fs.readdirSync(normalizedPath).forEach(function(file) {
//     require("./first/js/" + file);
//   });
  
app.get('/gl-matrix.js', function (req, res) {
    res.sendFile(path.join(__dirname+'/gl-matrix.js'));
});

app.get('/index.js', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.js'));
});
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/js/three.js', function (req, res) {
    res.sendFile(path.join(__dirname+'/three.js'));
});
app.get('/js/OBJLoader.js', function (req, res) {
    res.sendFile(path.join(__dirname+'/OBJLoader.js'));
});
app.get('/js/OrbitControls.js', function (req, res) {
    res.sendFile(path.join(__dirname+'/OrbitControls.js'));
});
app.get('/models/arwing.obj', function (req, res) {
    res.sendFile(path.join(__dirname+'/arwing.obj'));
});

app.get('/models/clocktower_obj.obj', function (req, res) {
    res.sendFile(path.join(__dirname+'/clocktower_obj.obj'));
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});