import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavMenu() {
    return ( 
        <div>
            <Navbar collapseOnSelect fixed='top' expand='md' bg='dark' variant='dark' style={{fontFamily:"Cabin,Helvetica Neue,Helvetica,Arial,sans-serif"}}>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="ml-auto">
                            <Nav.Link href='/course'>Course</Nav.Link>
                            <Nav.Link href='/student'>Student</Nav.Link>
                            <Nav.Link href='/lecturer'>Lecturer</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavMenu;
