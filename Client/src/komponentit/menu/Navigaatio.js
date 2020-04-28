import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigaatio.css'

    const Navigaatio = props => {
        return (
            <ul className='nav-links'>
                <li>
                <NavLink to="/">Koti</NavLink> 
                </li>
                <li>
                <NavLink to="/lomakkeet">Pohjatiedot</NavLink> 
                </li>
                <li>
                <NavLink to="/lomake">Seurantalomake</NavLink>
                </li>
                <li>
                <NavLink to="/tilastot">Tilastot</NavLink>
                </li>
                <li>
                <NavLink to="/lista">Lista</NavLink>
                </li>
            </ul>
        );
    }


export default Navigaatio;