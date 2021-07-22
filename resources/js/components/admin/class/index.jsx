import React, {useState,useEffect} from 'react';
const apiLink = "http://127.0.0.1:8000/api";

function ClassIndex(){

    const [classes,setClass] = useState([]);
    const [classSize,setClassSize] = useState(0);

    function fetchData(){
        fetch(`${apiLink }/courseclass`)
        .then((response)=>response.json())
        .then((response)=> {
            setClass(response);
            setClassSize(response.length);
        });

    }

    useEffect(()=>{
        fetchData();
    },[classSize]);

    function deleteClass(id){
        const requestOptions ={
            method: 'DELETE',
        };

        fetch(`${apiLink }/courseclass/${id}`,requestOptions)
        .then((response)=>{
            if(response.status == 200)
            {
                alert("Class Deleted Successfully");
                setClassSize(classSize-1);
            }
        })
        .catch((error)=>{
            console.log(error);
        });    
        
    }

    return (
        <div className="container">
            <div className="row justify-content-end mx-5 my-3">
                <a className="btn btn-primary" href="/admin/class/create">Add</a>
                </div>
            <div className="row">
                <div className="col-md-12">
                        <div className="row container">
                            <table className="border table table-striped">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Course ID</th>
                                        <th>Course Name</th>
                                        <th>Semester</th>
                                        <th>Year</th>
                                        <th>Lecturers</th>
                                        <th>Students</th>
                                        <th className="col-5">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {classes.map((courseclass,index) =>
                                    (<tr key={courseclass.id}>
                                        <td>{index+1}</td>
                                        <td>{courseclass.courseID}</td>
                                        <td>{courseclass.courseName}</td>
                                        <td>{courseclass.semester}</td>
                                        <td>{courseclass.year}</td>
                                        <td>{courseclass.countLecturer}</td>
                                        <td>{courseclass.countStudent}</td>
                                        <td><a href={"/admin/class/"+courseclass.id} className="btn btn-success btn-sm mx-3">Edit</a>
                                        <button className="btn btn-danger btn-sm" onClick={()=> deleteClass(courseclass.id)}>Delete</button></td>
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

export default ClassIndex;