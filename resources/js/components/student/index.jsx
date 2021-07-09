import React, {useState,useEffect} from 'react';


function StudentIndex() {

        const [students,setStudent] = useState([]);
        const [studentSize,setStudentSize] = useState(0);
    
        function fetchData(){
            fetch("api/students")
            .then((response)=>response.json())
            .then((response)=> {
                setStudent(response);
                setStudentSize(response.length);
            });

        }
    
        useEffect(()=>{
            fetchData();
        },[studentSize]);

        async function deleteCourse(id){
            const requestOptions ={
                method: 'DELETE',
            };
    
            await fetch(`api/students/${id}`,requestOptions)
            .then((response)=>{
                if(response.status == 200)
                {
                    alert("Student Deleted Successfully");
                    setCourseSize(studentSize-1);
                }
            })
            .catch((error)=>{
                console.log(error);
            });    
            
        }
    
        return (
            <div className="container">
                <div className="row justify-content-end mx-5 my-3">
                    <a className="btn btn-primary" href="/student/create">Add</a>
                    </div>
                <div className="row">
                    <div className="col-md-12">
                            <div className="row container">
                                <table className="border table table-striped">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Contact</th>
                                            <th className="col-5">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {students.map((student,index)=>
                                        (<tr key={student.id}>
                                            <td>{index+1}</td>
                                            <td>{student.studentID}</td>
                                            <td>{student.name}</td>
                                            <td>{student.email}</td>
                                            <td>{student.phoneNo}</td>
                                            <td><a href={student.id} className="btn btn-success btn-sm mx-3">Edit</a>
                                            <button className="btn btn-danger btn-sm" onClick={()=> deleteCourse(student.id)}>Delete</button></td>
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

export default StudentIndex;