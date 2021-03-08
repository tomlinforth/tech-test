import React, { Component } from 'react';
import {postNewContact} from '../api'

class NewContact extends Component {
    state = {contactNum:null, firstN:null, lastN:null}
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="contactSend">
                <input required placeholder="+1234567890" className="contactText" id="contactNum" value={this.state.contactNum} onChange={this.contactUpdate}></input>
                <input placeholder="First Name (optional)" className="contactText" id="firstN" value={this.state.firstN} onChange={this.firstNUpdate}></input>
                <input placeholder="Last Name (optional)" className="contactText" id="lastN" value={this.state.lastN} onChange={this.lastNUpdate}></input>
                <button type="submit" className="customBtn" id="contactBtn">Add New Contact</button>
            </form>
        );
    }

    contactUpdate = event => {
        this.setState({contactNum:event.target.value})
    }
    firstNUpdate = event => {
        this.setState({firstN:event.target.value})
    }
    lastNUpdate = event => {
        this.setState({lastN:event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        postNewContact(this.state.contactNum, this.state.firstN, this.state.lastN)
            .then(contact => {
                this.props.handleContact(true)
                this.setState({contactNum:'', firstN:'', lastN:''})
            })
    }
}

export default NewContact;
