import React from 'react';

import './ContactFilter.scss';

export class ContactFilter extends React.Component {
    state = {
        term: '',
    };
    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter({ ...this.state });
        });
    };
    render() {
        const { term } = this.state;
        return (
            <form
                className='contact-filter'
                onSubmit={(ev) => ev.preventDefault()}
            >
                {/* <label htmlFor='term'>Search</label> */}
                <input
                    placeholder='Search Contact'
                    type='text'
                    id='term'
                    name='term'
                    value={term}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}
