import React from 'react';
import { signup } from '../../store/actions/userActions';
import { connect } from 'react-redux';
// import { userService } from '../../services/UserService';
import './SignUp.scss';

class _SignUp extends React.Component {
    state = {
        userName: '',
        password: '',
        fullName: '',
    };
    componentDidMount() {}

    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.type === 'number' ? +target.value : target.value;
        this.setState({ [field]: value });
    };
    onCreateUser = async (ev) => {
        ev.preventDefault();
        const { userName, fullName, password } = this.state;
        this.props.signup(userName, fullName, password);
        this.props.history.push('/');
    };
    componentDidUpdate() {}
    componentWillUnmount() {}
    render() {
        const { userName, fullName, password } = this.state;
        return (
            <div className='signup-page'>
                <form onSubmit={this.onCreateUser}>
                    <label htmlFor='userName'>User Name</label>
                    <input
                        required
                        type='text'
                        id='userName'
                        value={userName}
                        onChange={this.handleChange}
                        name='userName'
                    />
                    <label htmlFor='fullName'>Fullname</label>
                    <input
                        required
                        type='text'
                        id='fullName'
                        value={fullName}
                        onChange={this.handleChange}
                        name='fullName'
                    />
                    <label htmlFor='password'>password</label>
                    <input
                        required
                        type='text'
                        id='password'
                        value={password}
                        onChange={this.handleChange}
                        name='password'
                    />
                    <button>Create User</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    };
};

const mapDispatchToProps = {
    signup,
};

export const SignUp = connect(mapStateToProps, mapDispatchToProps)(_SignUp);
