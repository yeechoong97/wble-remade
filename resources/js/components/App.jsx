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
                </Switch>
            </>
        </Router>
    );
    
}

export default App;

if (document.getElementById('example')) {
    ReactDOM.render(<React.StrictMode><App/></React.StrictMode>, document.getElementById('example'));
}

