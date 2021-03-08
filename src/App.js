import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {getAllContacts, getMessagesByNumber} from './api'
import ContactCard from './components/ContactCard'
import ContactMessages from './components/ContactMessages'
import MessageSender from './components/MessageSender'
import NewContact from './components/NewContact'

class App extends Component{
  state = {contactList:[], curContact:null, messages:[]}
  render(){
    return (
      <div className="App">
        <div className="contentWrap">
       <section className='contactSidebar'>
        <h3 id="contactBarTitle">Contacts</h3>
        <ul className="contactsList">
          {this.state.contactList.map(contact => {
            return (<ContactCard contact={contact} key={contact.contact_number} handleChangeContact={this.handleChangeContact}/>);
          })}          
        </ul>
        <NewContact handleContact={this.handleSentInfo}/>
       </section>
       <section className="messageMain">
          <section className="messageTitle">
            <h3 className="messageHeader">Messages</h3>
            {this.state.curContact ? <i>({this.state.curContact})</i> : <p></p>}
          </section>
          <section className="messageBlock">
            <ContactMessages messages={this.state.messages} curContact={this.state.curContact}/>
          </section>
          <MessageSender curContact={this.state.curContact} handleMessage={this.handleSentInfo}/>
       </section>
      </div>
      </div>
    );}

    fetchContacts = () => {
      getAllContacts().then(contacts => {this.setState({contactList:contacts})})
    }

    fetchMessages = () => {
      getMessagesByNumber(this.state.curContact)
          .then(messageData => {
            this.setState({messages:messageData})
          })
    }

    componentDidMount() {
      this.fetchContacts()
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.curContact !== this.state.curContact && this.state.curContact) {
        this.fetchMessages()
      }
    }

    handleSentInfo = (contactCheck) => {
      contactCheck ?this.fetchContacts() :this.fetchMessages()
      
    }

    handleChangeContact = event => {
      const { value } = event.target;
      value === this.state.curContact ? this.fetchMessages() : this.setState({ curContact: value });
    };
}

export default App;
