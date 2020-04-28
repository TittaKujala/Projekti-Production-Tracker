import React, { useState } from 'react';

import './MainNavigation.css';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';
import Navigaatio from './Navigaatio';
import SideDrawer from './SideDrawer';
import BackDrop from './BackDrop';


const MainNavigation = props => {

    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    }

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };

    return (
        <React.Fragment>  {/*voidaan nestata useampi NavLinks ilman syntax errosia*/}
            {drawerIsOpen && <BackDrop onClick={closeDrawerHandler} />}
            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className='main-navigation__drawer-nav'>
                    <Navigaatio />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className='main-navigation__title'>
                    <Link to='/'>Production Tracker</Link>
                </h1>
                <nav className='main-navigation__header-nav' >
                </nav>
            </MainHeader>
        </React.Fragment>
    )
};

export default MainNavigation;