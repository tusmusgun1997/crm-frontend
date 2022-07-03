import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../../assets/img/logo.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect variant='dark' bg='info' expand='md' >
            <Navbar.Brand>
                <img src={logo} alt='logo' width='50px' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic navbar-nav' />
            <Navbar.Collapse id='basic navbar-nav'>
                <Nav className='ml-auto'>
                    <Nav.Link href='/dashboard'>DashBoard</Nav.Link>
                    <Nav.Link href='/dashboard'>Tickets</Nav.Link>
                    <Nav.Link href='/dashboard'>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default Header