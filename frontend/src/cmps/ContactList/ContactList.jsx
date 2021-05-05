import React from 'react';
import { ContactPreview } from '../ContactPreview';
import './ContactList.scss';
export function ContactList({ contacts }) {
    return (
        <div className='contact-list'>
            {contacts &&
                contacts.map((contact) => (
                    <ContactPreview key={contact._id} contact={contact} />
                ))}
        </div>
    );
}
