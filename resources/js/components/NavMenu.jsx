import {React,useState,useEffect} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import AuthService from '../components/auth/auth.service';

function NavMenu() {

    const [loginState,setLoginState] = useState(localStorage.getItem("loginState"));

    useEffect(()=>{

    },[loginState])

    function userLogout(){
        AuthService.logout();
        setLoginState(localStorage.getItem("loginState"));
    }



    return ( 
        <div>
            <Navbar collapseOnSelect fixed='top' expand='md' bg='dark' variant='dark' style={{fontFamily:"Cabin,Helvetica Neue,Helvetica,Arial,sans-serif"}}>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                            {loginState ? (
                            <Nav className="ml-auto">
                            <Nav.Link href='/class'>Class</Nav.Link>
                            <Nav.Link href='/course'>Course</Nav.Link>
                            <Nav.Link href='/student'>Student</Nav.Link>
                            <Nav.Link href='/lecturer'>Lecturer</Nav.Link>
                            <Nav.Link href="#" onClick={userLogout}>Logout</Nav.Link>
                            </Nav>
                            )
                            :
                            (
                                <Nav className="ml-auto">
                                <Nav.Link href='/login'>Login</Nav.Link>
                                </Nav>
                            )
                            }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavMenu;
