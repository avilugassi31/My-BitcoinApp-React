import React from 'react';
import './AppHeader.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assests/imgs/logo.png';
import home from '../../assests/imgs/home.png';
import contact from '../../assests/imgs/contact.png';
import users from '../../assests/imgs/users.png';
import increase from '../../assests/imgs/increase.png';

export function AppHeader() {
    return (
        <section className='App-Header'>
            <div className='first-child'>
                <NavLink exact to='/'>
                    <img src={logo} alt='' />
                </NavLink>
            </div>
            <div className='second-child'>
                <ul>
                    <li>
                        <NavLink exact to='/'>
                            <img src={home} alt='' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>
                            <img src={contact} alt='' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/signup'>
                            <img src={users} alt='' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/statistic'>
                            <img src={increase} alt='' />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </section>
    );
}
