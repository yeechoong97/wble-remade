import React, {useState,useEffect} from 'react';
const apiLink = "http://127.0.0.1:8000/api";

function LecturerIndex() {

        const [lecturers,setLecturer] = useState([]);
        const [lecturerSize,setLecturerSize] = useState(0);
    
        function fetchData(){
            fetch(`${apiLink }/lecturers`)
            .then((response)=>response.json())
            .then((response)=> {
                setLecturer(response);
                setLecturerSize(response.length);
            });

        }
    
        useEffect(()=>{
            fetchData();
        },[lecturerSize]);

        async function deleteLecturer(id){
            const requestOptions ={
                method: 'DELETE',
            };
    
            await fetch(`${apiLink }/lecturers/${id}`,requestOptions)
            .then((response)=>{
                if(response.status == 200)
                {
                    alert("Lecturer Deleted Successfully");
                    setLecturerSize(lecturerSize-1);
                }
            })
            .catch((error)=>{
                console.log(error);
            });    
            
        }
    
        return (
            <div className="container my-5">
                <div className="row justify-content-end mx-5 my-3">
                    <a className="btn btn-primary" href="/lecturer/create">Add</a>
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
                                            <th>Faculty</th>
                                            <th className="col-5">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {lecturers.map((lecturer,index)=>
                                        (<tr key={lecturer.id}>
                                            <td>{index+1}</td>
                                            <td>{lecturer.lecturerID}</td>
                                            <td>{lecturer.name}</td>
                                            <td>{lecturer.email}</td>
                                            <td>{lecturer.phoneNo}</td>
                                            <td>{lecturer.faculty}</td>
                                            <td><a href={"lecturer/"+lecturer.id} className="btn btn-success btn-sm mx-3">Edit</a>
                                            <button className="btn btn-danger btn-sm" onClick={()=> deleteLecturer(lecturer.id)}>Delete</button></td>
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

export default LecturerIndex;