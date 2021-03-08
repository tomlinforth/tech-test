import React from 'react';

const ContactCard = (props) => {
    const firstName = props.contact.first_name;
    const lastName = props.contact.last_name;
    let contactInfo = props.contact.contact_number
    if (lastName && firstName) contactInfo = firstName + ' ' + lastName;
    else if (firstName && !lastName) contactInfo = firstName;
    else if (!firstName && lastName) contactInfo = lastName;
    return (
        <li className="contactCard">
                <button 
                    className="customBtn" 
                    onClick={props.handleChangeContact} 
                    value={props.contact.contact_number}>
                        {contactInfo !==0 ? contactInfo: props.contact.contact_number}
                </button>
        </li>
    );
}

export default ContactCard;
