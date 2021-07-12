import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NavMenu from './NavMenu';
import CourseIndex from './course/index';
import CourseCreate from './course/create';
import CourseEdit from './course/edit';
import StudentIndex from './student/index';
import StudentCreate from './student/create';
import StudentEdit from './student/edit';
import LecturerIndex from './lecturer/index';
import LecturerCreate from './lecturer/create';
import LecturerEdit from './lecturer/edit';
import ClassIndex from './class/index';
import ClassCreate from './class/create';

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
                </Switch>
            </>
        </Router>
    );
    
}

export default App;

if (document.getElementById('example')) {
    ReactDOM.render(<React.StrictMode><App/></React.StrictMode>, document.getElementById('example'));
}

