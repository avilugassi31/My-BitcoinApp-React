import React from 'react';
import { contactService } from '../../services/contactService';
import './ContactEditPage.scss';

export class ContactEditPage extends React.Component {
    state = {
        contact: {
            name: '',
            email: '',
            phone: '',
            coins: '',
            details: '',
        },
    };
    async componentDidMount() {
        const { id } = this.props.match.params;

        const contact = id
            ? await contactService.getContactById(id)
            : contactService.getEmptyContact();
        this.setState({ contact });
    }
    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.type === 'number' ? +target.value : target.value;
        this.setState((prevState) => ({
            contact: { ...prevState.contact, [field]: value || '' },
        }));
    };

    onSaveContact = async (ev) => {
        ev.preventDefault();
        await contactService.saveContact({ ...this.state.contact });
        this.props.history.push('/');
    };

    componentDidUpdate() {}
    componentWillUnmount() {}
    render() {
        const { name, email, phone, details, coins } = this.state.contact;
        return (
            <div className='edit-container'>
                <form className='contact-edit' onSubmit={this.onSaveContact}>
                    <label htmlFor='name'>name</label>
                    <input
                        required
                        type='text'
                        id='name'
                        value={name}
                        onChange={this.handleChange}
                        name='name'
                    />

                    <label htmlFor='phone'>phone</label>
                    <input
                        required
                        type='text'
                        id='phone'
                        value={phone}
                        onChange={this.handleChange}
                        name='phone'
                    />

                    <label htmlFor='email'>email</label>
                    <input
                        required
                        type='text'
                        id='email'
                        value={email}
                        onChange={this.handleChange}
                        name='email'
                    />
                        <label htmlFor='coins'>coins</label>
                    <input
                        required
                        type='number'
                        id='coins'
                        value={coins}
                        onChange={this.handleChange}
                        name='coins'
                    />
                    <label htmlFor='details'>details</label>
                    <textarea
                        maxLength='600'
                        id='details'
                        value={details}
                        onChange={this.handleChange}
                        name='details'
                    />
                    <button>Save Contact</button>
                </form>
            </div>
        );
    }
}
