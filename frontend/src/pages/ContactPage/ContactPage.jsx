import React from 'react';
import { connect } from 'react-redux';
import './ContactPage.scss';
import { Link } from 'react-router-dom';
import { ContactFilter } from '../../cmps/ContactFilter';
import { ContactList } from '../../cmps/ContactList';
import { loadContacts } from '../../store/actions/contactsActions';
import plusContact from '../../assests/imgs/plus.png';

class _ContactPage extends React.Component {
    state = {
        filterBy: null,
    };
    componentDidMount() {
        this.props.loadContacts(this.state.filterBy);
    }

    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, () =>
            this.props.loadContacts(this.state.filterBy)
        );
    };
    componentDidUpdate() {}
    componentWillUnmount() {}
    render() {
        const { contacts } = this.props;
        return (
            <div className='contact-page'>
                <div className='filter-serach'>
                    <ContactFilter onChangeFilter={this.onChangeFilter} />
                    <Link to='/contact/edit'>
                        <img src={plusContact} alt='' />
                    </Link>
                </div>
                <ContactList contacts={contacts} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        contacts: state.contactReducer.contacts,
    };
};

const mapDispatchToProps = {
    loadContacts,
};

export const ContactPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(_ContactPage);
