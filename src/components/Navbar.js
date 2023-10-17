import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const NavbarNav = () => {

    const productDetails = useSelector(state => state.cart)
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Navbar.Brand ><Link to="/" className='nav-link'>Redux ToolKIt</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/product" className=' nav-link'>Product</Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end me-4' >
                    <Link to="/Cart" className='nav-link' ><h5>My bag {productDetails.length}</h5> </Link>
                </Navbar.Collapse>
            </Navbar >
        </>
    )
}

export default NavbarNav
