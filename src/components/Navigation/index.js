import React from 'react';
import './assets/css/style.css';
import { Navbar, Container, Nav } from 'react-bootstrap';


function Navigation({ currentPage, handlePageChange }) {
  return (
    <Navbar className="nav" bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#about" onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</Nav.Link>
          <Nav.Link href="#projects" onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</Nav.Link>
          <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
};

export default Navigation;