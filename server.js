var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 4000;

app.use(express.static('build'));
app.set('views', './build');

app.get('*', function (req, res) {
    res.sendFile(`${process.cwd()}/build/index.html`)
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('server received:', msg);
        io.emit('chat message', msg);
    });
});
http.listen(port, function(){
    console.log('listening on ' + port);
});