import React from 'react';
import {Link} from '@reach/router'

const ContactCard = (props) => {
    const contactInfo = props.contact.first_name + props.contact.last_name;
    return (
        <li className="contactCard">
            <Link to={`/messages/${props.contact.contact_number}`}>
                <button 
                    className="customBtn" 
                    onClick={props.handleChangeContact} 
                    value={props.contact.contact_number}>
                        {contactInfo !==0 ? contactInfo : props.contact.contact_number}
                </button>
            </Link>
        </li>
    );
}

export default ContactCard;
