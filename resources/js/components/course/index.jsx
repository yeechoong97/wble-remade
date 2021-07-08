import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

function CourseIndex() {
        const [courses,setCourse] = useState([]);
        const [students,setStudent] = useState([]);
    
        function fetchData(){
            fetch("api/courses")
            .then((response)=>response.json())
            .then((response)=> {
                setCourse(response);
            });
    
            fetch("api/user")
            .then((response)=>response.json())
            .then((response)=>{
                setStudent(response);
            });
        }
    
        useEffect(()=>{
            fetchData();
        },[]);
    
        return (
            <div className="container">
                <div className="row justify-content-end mx-5 my-3">
                    <a className="btn btn-primary" href="/create">Add</a>
                    </div>
                <div className="row">
                    <div className="col-md-12">
                            <div className="row container">
                                <table className="border table table-striped">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Code</th>
                                            <th>Jan Intake</th>
                                            <th>May Intake</th>
                                            <th>Oct Intake</th>
                                            <th className="col-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {courses.map((course,index)=>
                                        (<tr key={course.id}>
                                            <td>{index+1}</td>
                                            <td>{course.name}</td>
                                            <td>{course.code}</td>
                                            <td>{course.janIntake==1? "Yes" : "No"}</td>
                                            <td>{course.mayIntake==1? "Yes" : "No"}</td>
                                            <td>{course.octIntake==1? "Yes" : "No"}</td>
                                            <td><a href="#" className="btn btn-success btn-sm mx-3">Edit</a><a href="#" className="btn btn-danger btn-sm">Delete</a></td>
                                        </tr>)
                                        )}
                                    </tbody>
                                </table>
                            </div>
                    </div>
                </div>
            </div>
        );
}

export default CourseIndex;