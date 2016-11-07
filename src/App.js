import React, { Component } from 'react';
/* eslint-disable */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/* eslint-enable */
import Header from './components/Header';
import Body from './components/Body';
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
            <MuiThemeProvider>
                <div className="App">
                    <Header />
                    <Body
                        sendMessage={sendMessage}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
