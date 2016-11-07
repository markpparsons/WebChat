import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default function Body({ sendMessage }) {
    return (
        <div className="App-body">
            <ul id="messages"></ul>
            <div>
                <TextField
                    hintText="Full width"
                />
                <RaisedButton primary={true} onClick={sendMessage} label="Send" />
            </div>
        </div>
    );
}

Body.proTypes = {
    sendMessage: React.PropTypes.func
};