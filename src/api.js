import axios from 'axios';

export const getMessagesByNumber = number => {
    return axios
        .get(`https://techtestapiwsl.herokuapp.com/api/messages/${number}`)
        .then(({data}) => {
            return data.messages;
        })
}

export const getAllContacts = () => {
    return axios
        .get('https://techtestapiwsl.herokuapp.com/api/contacts')
        .then(({data}) => {
            return data.contacts;
        })
}

export const postNewMessage = (contact_num, body) => {
    return axios
        .post('https://techtestapiwsl.herokuapp.com/api/messages/', {Body:body, From:'+12286410309', To:contact_num})
        .then((data) => {
            return true
        })
}

export const postNewContact = (contact_num, firstN, lastN) => {
    return axios
        .post('https://techtestapiwsl.herokuapp.com/api/contacts/', {contact_number:contact_num, first_name:firstN, last_name:lastN})
        .then(({data}) => {
            return data.contact;
        })
}