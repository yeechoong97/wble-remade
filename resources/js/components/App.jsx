import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NavMenu from './NavMenu';
import CourseIndex from './admin/course/index';
import CourseCreate from './admin/course/create';
import CourseEdit from './admin/course/edit';
import StudentIndex from './admin/student/index';
import StudentCreate from './admin/student/create';
import StudentEdit from './admin/student/edit';
import LecturerIndex from './admin/lecturer/index';
import LecturerCreate from './admin/lecturer/create';
import LecturerEdit from './admin/lecturer/edit';
import ClassIndex from './admin/class/index';
import ClassCreate from './admin/class/create';
import ClassEdit from './admin/class/edit';
import Login from './auth/login';
import StudentHome from './student/index';

function App() {
    return (
        <Router>
            <>
                <NavMenu/>
                <Switch>
                    <Route exact path ="/course" component={CourseIndex}/>
                    <Route exact path="/course/create" component={CourseCreate}/>
                    <Route exact path="/course/:id" component={CourseEdit}/>
                    <Route exact path ="/student" component={StudentIndex} />
                    <Route exact path="/student/create" component={StudentCreate}/>
                    <Route exact path="/student/:id" component={StudentEdit} />
                    <Route exact path="/lecturer" component={LecturerIndex} />
                    <Route exact path="/lecturer/create" component={LecturerCreate} />
                    <Route exact path="/lecturer/:id" component={LecturerEdit} />
                    <Route exact path ="/class" component={ClassIndex} />
                    <Route exact path="/class/create" component={ClassCreate}/>
                    <Route exact path="/class/:id" component={ClassEdit} />
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/student/student/home" component={StudentHome}/>
                </Switch>
            </>
        </Router>
    );
    
}

export default App;

if (document.getElementById('example')) {
    ReactDOM.render(<React.StrictMode><App/></React.StrictMode>, document.getElementById('example'));
}

