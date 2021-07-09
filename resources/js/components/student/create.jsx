import React, {useState} from 'react';
import FormComponents from './form_components';

function StudentCreate(){

    const [studentID,setStudentID] = useState("");
    const [studentName,setStudentName] = useState("");
    const [studentEmail,setStudentEmail] = useState("");
    const [studentContact,setStudentContact] = useState("");
    const student = {
        'studentID' : studentID,
        'name' : studentName,
        'email' : studentEmail,
        'contact' : studentContact
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
                'phoneNo' : studentContact
            })
        };

        await fetch("api/students",requestOptions)
        .then((response)=>{
            if(response.status == 200)
            {
                alert("Student Created Successfully");
                window.location = '/student';
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
        />
    )


}

export default StudentCreate;