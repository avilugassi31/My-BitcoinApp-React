import React, { Component } from 'react';
import './TransferFund.scss';
import salary from '../../assests/imgs/salary.png';
// import { userService } from '../../services/UserService';
import { socketService } from '../../services/socket.service';
export class TransferFund extends Component {
    state = {
        coins: null,
    };
    componentDidMount() {
        // socketService.setup();
        // socketService.emit('contact move', this.props.contact._id);
    }

    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.type === 'number' ? +target.value : target.value;
        this.setState({ [field]: value });
    };
    componentDidUpdate() {}
    componentWillUnmount() {}
    render() {
        const { contact, addMove } = this.props;
        const { coins } = this.state;
        return (
            <div className='transfer-cmp'>
                <form onSubmit={addMove}>
                    <label htmlFor='transfer'>transfer coins to {contact.name}</label>
                    <input
                        type='number'
                        name='transfer'
                        id='transfer'
                        value={coins}
                        onChange={this.handleChange}
                    />
                    <button>
                        <img src={salary} alt='' />
                    </button>
                </form>
            </div>
        );
    }
}
