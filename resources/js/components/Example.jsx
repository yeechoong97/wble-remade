import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';

function Example() {

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
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="row container">
                            <table className="border table table-striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {courses.map((course)=>
                                    (<tr key={course.id}>
                                        <td>{course.name}</td>
                                        <td>{course.code}</td>
                                    </tr>)
                                    )}
                                </tbody>
                            </table>
                            <table className="border table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {students.map((student)=>
                                    (<tr key={student.id}>
                                        <td>{student.userID}</td>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                    </tr>)
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

