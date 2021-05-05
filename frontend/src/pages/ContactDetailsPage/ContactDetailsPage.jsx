import { Component } from 'react';
import {
    removeContact,
    getContactById,
} from '../../store/actions/contactsActions';
import { loadUser, addMove } from '../../store/actions/userActions';
import { connect } from 'react-redux';
import { TransferFund } from '../../cmps/TransferFund';
import { Link } from 'react-router-dom';
import './ContactDetailsPage.scss';
import edit from '../../assests/imgs/edit.png';
import remove from '../../assests/imgs/delete.png';
import home from '../../assests/imgs/home.png';
import { socketService } from '../../services/socket.service';
export function MovesDetails({ props }) {
    const contactId = props.contact._id;
    const moves = props.user.moves.filter((move) => move.toId === contactId);
    return (
        moves && (
            <div className='moves-details-page'>
                <ul>
                    {moves.map((move) => (
                        <li key={move.toId}>
                            <h1 className='user-title'>
                                by:{props.user.userName}
                            </h1>
                            <h2>transfer date: {move.transferAt}</h2>
                            <h2>transfer time: {move.transferTime}</h2>
                            <h2>amount: {move.amount} coins</h2>
                        </li>
                    ))}
                </ul>
            </div>
        )
    );
}

class _ContactDetailsPage extends Component {
    componentDidMount = async () => {
        await this.props.getContactById(this.props.match.params.id);
        // socketService.setup();
        // socketService.emit('contact move', this.props.user._id);
         this.props.loadUser();
    };

    deleteContact = async (contactId) => {
        await this.props.removeContact(contactId);
        this.props.history.push('/');
    };

    addMove = async (ev) => {
        ev.preventDefault();
        const value = ev.target[0].value;
        const { contact } = this.props;
        await this.props.addMove(contact, value);
        socketService.emit('moneySent', this.props.user.moves);
        this.props.history.push('/');
    };
    // componentDidUpdate() {}
    // componentWillUnmount() {}
    render() {
        const { contact, user } = this.props;
        console.log('user:', user);

        if (!contact) return <div>loading</div>;
        return (
            contact && (
                <section className='details'>
                    <div className='details-container'>
                        <div className='user-details'>
                            <img
                                src={`https://i.pravatar.cc/150?u=${contact._id}`}
                                alt=''
                            />
                            <h1>{contact.name}</h1>
                        </div>
                        <h2>{contact.email}</h2>
                        <h2>{contact.phone}</h2>
                        <p>{contact.details}</p>
                        <TransferFund
                            maxCoins={user.coins}
                            contact={contact}
                            addMove={this.addMove}
                        />
                        <MovesDetails props={this.props} />
                        <div className='details-buttons'>
                            <button
                                onClick={() => this.deleteContact(contact._id)}
                            >
                                <img src={remove} alt='Remove Contact' />
                            </button>

                            <Link to={'/contact/edit/' + contact._id}>
                                <img src={edit} alt='' />
                            </Link>
                            <Link to={'/'}>
                                <img src={home} alt='' />
                            </Link>
                        </div>
                    </div>
                </section>
            )
        );
    }
}
const mapStateToProps = (state) => {
    return {
        contact: state.contactReducer.contact,
        user: state.userReducer.user,
    };
};

const mapDispatchToProps = {
    removeContact,
    getContactById,
    loadUser,
    addMove,
};

export const ContactDetailsPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(_ContactDetailsPage);
