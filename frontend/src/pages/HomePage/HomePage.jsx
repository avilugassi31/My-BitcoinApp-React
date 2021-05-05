import React from 'react'
import { connect } from 'react-redux';
import { MoveList } from '../../cmps/MoveList';
import { loadUser } from '../../store/actions/userActions';
import { loadContacts } from '../../store/actions/contactsActions';
import { bitCoinService } from '../../services/bitCoinService';


import './HomePage.scss';

class _HomePage extends React.Component {
    state = {
        rate: null,
    };
    componentDidMount = async () => {
        await this.getRate();
        await this.props.loadUser();
    };

    async getRate() {
        const rate = await bitCoinService.getRate();
        this.setState({ rate });
    }

    render() {
        const { rate } = this.state;
        const { user } = this.props;

        return (
            user && (
                <section className='home-page'>
                    <div className='user-profile'>
                        <h1>Welcome Back {user.userName}</h1>
                        <h3>Your Balance: {user.coins}</h3>
                        <h3> Bitcoin Rate: {rate} </h3>
                    </div>
                    <MoveList moves={user.moves} />
                </section>
            )
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        contact: state.contactReducer.contact,
    };
};

const mapDispatchToProps = {
    loadUser,
    loadContacts,
};

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage);
