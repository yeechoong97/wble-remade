import React, {useState,useEffect} from 'react';
const apiLink = "http://127.0.0.1:8000/api";
function CourseIndex() {

        const [courses,setCourse] = useState([]);
        const [courseSize,setCourseSize] = useState(0);
    
        function fetchData(){
            fetch("api/courses")
            .then((response)=>response.json())
            .then((response)=> {
                setCourse(response);
                setCourseSize(response.length);
            });

        }
    
        useEffect(()=>{
            fetchData();
        },[courseSize]);

        async function deleteCourse(id){
            const requestOptions ={
                method: 'DELETE',
            };
    
            await fetch(`${apiLink}/courses/${id}`,requestOptions)
            .then((response)=>{
                if(response.status == 200)
                {
                    alert("Course Deleted Successfully");
                    setCourseSize(courseSize-1);
                }
            })
            .catch((error)=>{
                console.log(error);
            });    
            
        }
    
        return (
            <div className="container">
                <div className="row justify-content-end mx-5 my-3">
                    <a className="btn btn-primary" href="/course/create">Add</a>
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
                                            <td><a href={"course/"+course.id} className="btn btn-success btn-sm mx-3">Edit</a>
                                            <button className="btn btn-danger btn-sm" onClick={()=> deleteCourse(course.id)}>Delete</button></td>
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