import React from 'react';
import { Link } from 'react-router-dom';
import './ContactPreview.scss';
export function ContactPreview({ contact }) {
    return (
        <Link to={'/contact/' + contact._id}>
            <div className='contact-preview'>
                <img src={`https://i.pravatar.cc/150?u=${contact._id}`} alt='' />
                <h1>{contact.name}</h1>
              
            </div>
        </Link>
    );
}
