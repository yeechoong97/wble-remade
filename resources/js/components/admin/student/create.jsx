import React, {useState} from 'react';
import FormComponents from './form_components';
const apiLink = "http://127.0.0.1:8000/api";

function StudentCreate(){

    const [studentID,setStudentID] = useState("");
    const [studentName,setStudentName] = useState("");
    const [studentEmail,setStudentEmail] = useState("");
    const [studentContact,setStudentContact] = useState("");
    const [studentFaculty,setStudentFaculty] = useState("LKCFES");
    const student = {
        'studentID' : studentID,
        'name' : studentName,
        'email' : studentEmail,
        'contact' : studentContact,
        'faculty' : studentFaculty,
    };

    async function submitForm(event){
        event.preventDefault();
        const requestOptions ={
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'studentID' : studentID,
                'name' : studentName,
                'email' : studentEmail,
                'phoneNo' : studentContact,
                'faculty' : studentFaculty,
            })
        };

        await fetch(`${apiLink}/students`,requestOptions)
        .then((response)=>{
            if(response.status == 200)
            {
                alert("Student Created Successfully");
                window.location = '/admin/student';
            }
        })
        .catch((error)=>{
            console.log(error);
        });        
    };


    return(
        <FormComponents 
            submitForm={submitForm}
            student={student}
            setStudentID={setStudentID}
            setStudentName={setStudentName}
            setStudentEmail={setStudentEmail}
            setStudentContact={setStudentContact}
            setStudentFaculty = {setStudentFaculty}
        />
    )


}

export default StudentCreate;