import React from 'react';

function FormComponents({submitForm,lecturer,setLecturerID,setLecturerName,setLecturerEmail,setLecturerContact}){
    return(
        <div className="container border">
            <form onSubmit={submitForm}>
            <div className="px-5 py-3 form-inline">
                <label>Lecturer ID :</label>
                <input type="text" className="form-control mx-3 col-md-7 ml-auto" value={lecturer.lecturerID} onChange={(event)=> setLecturerID(event.target.value)} />
            </div>
            <div className="px-5 py-3 form-inline">
                <label>Lecturer Name :</label>
                <input type="text" className="form-control mx-3 col-md-7 ml-auto" value={lecturer.name} onChange={(event)=> setLecturerName(event.target.value)} />
            </div>
            <div className="px-5 py-3 form-inline">
                <label>Email :</label>
                <input type="text" className="form-control mx-3 col-md-7 ml-auto" value={lecturer.email} onChange={(event)=> setLecturerEmail(event.target.value)} />
            </div>
            <div className="px-5 py-3 form-inline">
                <label>Contact No :</label>
                <input type="text" className="form-control mx-3 col-md-7 ml-auto" value={lecturer.contact} onChange={(event)=> setLecturerContact(event.target.value)} />
            </div>
            <div className="px-5 py-3">
                <a href="/lecturer" className="btn btn-success mx-3">Back</a>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            </form>
        </div>
    )

}

export default FormComponents;