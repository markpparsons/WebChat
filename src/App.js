import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import io from 'socket.io-client'
let socket = new io.connect();

function receiveMessage(message = 'Welcome to the chat') {
    const node = document.createElement("LI");
    //const textnode = document.createTextNode(message);
    node.innerHTML = message;
    const messageBoard = document.getElementById("messages");
    //node.appendChild(textnode);
    messageBoard.appendChild(node);

}

function sendMessage(e) {
    e.preventDefault();
    const messageInput = document.getElementById("messageInput");
    socket.emit('chat message', messageInput.value);
    messageInput.value = '';
    messageInput.focus();
}

class App extends Component {

    componentDidMount() {
        socket.on('connection', function() {
            console.log('message', 'connected');
        });
        socket.on('chat message', function(msg) {
            console.log('client received:', msg);
            receiveMessage(msg);
        })
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Socket.IO WebChatsdfsdfsdfsdf!</h2>
                </div>
                <div className="App-body">
                    <ul id="messages"></ul>
                    <form action="">
                        <input id="messageInput" autoComplete="off" />
                        <button onClick={sendMessage}>Send</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;
