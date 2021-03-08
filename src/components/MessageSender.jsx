import React, { Component } from 'react';
import {postNewMessage} from '../api'

class MessageSender extends Component {
    state = {messageInp:null}

    render() {
        return (            
            <form onSubmit={this.handleSubmit} className="messageSend">
                <textarea required placeholder="Enter message" value={this.state.messageInp} className="messageText" onChange={this.inputUpdate}></textarea>
                <button type="submit" className="messageBtn">Send Message</button>
            </form>
        );
    }

    inputUpdate = event => {
        this.setState({messageInp:event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        const messageInp = this.state.messageInp;
        postNewMessage(this.props.curContact, messageInp)
            .then(() => {
                this.props.handleMessage(false)
                this.setState({messageInp:''})
            })
    }
}

export default MessageSender;
