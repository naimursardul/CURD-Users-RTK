import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Link to="/" className='navbar-brand'>CURD User</Link>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">All Users</NavLink>
            <NavLink className="nav-link" to="/create-user">Create user</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;