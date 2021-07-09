import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route,Switch} from 'react-router-dom';
import CourseIndex from './course/index';
import CourseCreate from './course/create';
import CourseEdit from './course/edit';

function App() {
    return (
        <Router>
            <>
                <Switch>
                    <Route exact path ="/" component={CourseIndex}/>
                    <Route path="/create" component={CourseCreate}/>
                    <Route path="/:id" component={CourseEdit}/>
                </Switch>
            </>
        </Router>
    );
    
}

export default App;

if (document.getElementById('example')) {
    ReactDOM.render(<React.StrictMode ><App /></React.StrictMode>, document.getElementById('example'));
}

