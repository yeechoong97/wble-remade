import {React,useState,useEffect} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import AuthService from '../components/auth/auth.service';

function NavMenu() {

    const [currentUser,setCurrentUser] = useState(undefined);
    const [adminRole,setAdminRole] = useState(false);
    const [lecturerRole,setLecturerRole] = useState(false);
    const [studentRole,setStudentRole] = useState(false);

    useEffect(()=>{
        const user = AuthService.getCurrentUser();
        if(user)
        {
            setCurrentUser(user);
            setAdminRole(user.user.role == "admin");
            setLecturerRole(user.user.role == "lecturer");
            setStudentRole(user.user.role=="student");
        }
    },[]);

    function userLogout(){
        AuthService.logout();
        window.location = '/login';
    }



    return ( 
        <div>
            <Navbar collapseOnSelect fixed='top' expand='md' bg='dark' variant='dark' style={{fontFamily:"Cabin,Helvetica Neue,Helvetica,Arial,sans-serif"}}>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                            {currentUser ? (
                            <Nav className="ml-auto">
                                <Nav.Link href="#">{currentUser.user.username}</Nav.Link>
                                {adminRole && (
                                    <>
                                    <Nav.Link href='/admin/class'>Class</Nav.Link>
                                    <Nav.Link href='/admin/course'>Course</Nav.Link>
                                    <Nav.Link href='/admin/student'>Student</Nav.Link>
                                    <Nav.Link href='/admin/lecturer'>Lecturer</Nav.Link>
                                    <Nav.Link href="#" onClick={userLogout}>Logout</Nav.Link>
                                    </>
                                )}
                                {lecturerRole && (
                                    <>
                                    <Nav.Link href="#" onClick={userLogout}>Logout</Nav.Link>
                                    </>
                                )}
                                {studentRole && (
                                    <>
                                    <Nav.Link href="/student/index">Home</Nav.Link>
                                    <Nav.Link href="#" onClick={userLogout}>Logout</Nav.Link>
                                    </>
                                )}
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
