var app = require('express')();
var express = require('express');

var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//High Horse
app.get('/HighHorse/:id', function(req, res) {
	console.log('highhorseeee');
    res.sendFile(path.join(__dirname + '/HighHorse.html'));
});

//Lone Wolf
app.get('/LoneWolf/:id', function(req, res) {
    res.sendFile(path.join(__dirname + '/LoneWolf.html'));
	});
//cust 3
app.get('/Judies/:id', function(req, res) {
    res.sendFile(path.join(__dirname + '/Judies.html'));
	});
//cust 4
app.get('/PastaEBasta/:id', function(req, res) {
    res.sendFile(path.join(__dirname + '/PastaEBasta.html'));
	});

//res 2
app.get('/restaurant2/', function(req, res) {
    res.sendFile(path.join(__dirname + '/restaurant2.html'));
});
//res 3
app.get('/restaurant3/', function(req, res) {
    res.sendFile(path.join(__dirname + '/restaurant3.html'));
});
//res 4
app.get('/restaurant4/', function(req, res) {
    res.sendFile(path.join(__dirname + '/restaurant4.html'));
});

io.on('connection', function(socket){
  console.log('a user connected');
});

//Restaurant1
app.get('/serv1/:id', function(req, res) {
   console.log('recieved the server request for table');
	io.emit('R1S', { for: req.params.id });
	res.send(200);
});
	
app.get('/check1/:id', function(req, res) {
   console.log('recieved the check request');
	io.emit('R1C', { for: req.params.id });
	res.send(200);
});

//Restaurant2
app.get('/serv2/:id', function(req, res) {
   console.log('recieved the server request');
	io.emit('R2S', { for: req.params.id });
	res.send(200);
});
app.get('/check2/:id', function(req, res) {
   console.log('recieved the check request');
	io.emit('R2C', { for: req.params.id });
	res.send(200);
});

//Restaurant3
app.get('/serv3/:id', function(req, res) {
   console.log('recieved the server request');
	io.emit('R3S', { for: req.params.id });
	res.send(200);
});
app.get('/check3/:id', function(req, res) {
   console.log('recieved the check request');
	io.emit('R3C', { for: req.params.id });
	res.send(200);
});

//Restaurant4
app.get('/serv4/:id', function(req, res) {
   console.log('recieved the server request');
	io.emit('R4S', { for: req.params.id });
	res.send(200);
});
app.get('/check4/:id', function(req, res) {
   console.log('recieved the check request');
	io.emit('R4C', { for: req.params.id });
	res.send(200);
});





http.listen(3000, function(){
  console.log('listening on *:3000');
});

app.use(express.static('./.'));
