import React from 'react';

function FormComponents({submitForm,student,setStudentID,setStudentName,setStudentEmail,setStudentContact}){
    return(
        <div className="container border">
            <form onSubmit={submitForm}>
            <div className="px-5 py-3 form-inline">
                <label>Student ID :</label>
                <input type="text" className="form-control mx-3 col-md-7" value={student.studentID} onChange={(event)=> setStudentID(event.target.value)} />
            </div>
            <div className="px-5 py-3 form-inline">
                <label>Student Name :</label>
                <input type="text" className="form-control mx-3 col-md-7" value={student.name} onChange={(event)=> setStudentName(event.target.value)} />
            </div>
            <div className="px-5 py-3 form-inline">
                <label>Email :</label>
                <input type="text" className="form-control mx-3 col-md-7" value={student.email} onChange={(event)=> setStudentEmail(event.target.value)} />
            </div>
            <div className="px-5 py-3 form-inline">
                <label>Contact No :</label>
                <input type="text" className="form-control mx-3 col-md-7" value={student.contact} onChange={(event)=> setStudentContact(event.target.value)} />
            </div>
            <div className="px-5 py-3">
                <a href="/student" className="btn btn-success mx-3">Back</a>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            </form>
        </div>
    )

}

export default FormComponents;