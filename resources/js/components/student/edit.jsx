import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import FormComponents from './form_components';
const apiLink = "http://127.0.0.1:8000/api";

function StudentEdit(){

    const {id} = useParams();
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
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'studentID' : studentID,
                'name' : studentName,
                'email' : studentEmail,
                'phoneNo' : studentContact
            })
        };

        await fetch(`${apiLink}/students/${id}`,requestOptions)
        .then((response)=>{
            if(response.status == 200)
            {
                alert("Student Updated Successfully");
                window.location = '/student';
            }
        })
        .catch((error)=>{
            console.log(error);
        });        
    };

    function retrieveData(){
        fetch(`${apiLink}/students/${id}`)
        .then((response)=> response.json())
        .then((response)=> {
            setStudentID(response.studentID);
            setStudentName(response.name);
            setStudentEmail(response.email);
            setStudentContact(response.phoneNo);
        });

    }

    useEffect(()=>{
        retrieveData();
    },[]);


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

export default StudentEdit;