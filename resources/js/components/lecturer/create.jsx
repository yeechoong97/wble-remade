import React, {useState} from 'react';
import FormComponents from './form_components';
const apiLink = "http://127.0.0.1:8000/api";

function LecturerCreate(){

    const [lecturerID,setLecturerID] = useState("");
    const [lecturerName,setLecturerName] = useState("");
    const [lecturerEmail,setLecturerEmail] = useState("");
    const [lecturerContact,setLecturerContact] = useState("");
    const lecturer = {
        'lecturerID' : lecturerID,
        'name' : lecturerName,
        'email' : lecturerEmail,
        'contact' : lecturerContact
    };

    async function submitForm(event){
        event.preventDefault();
        const requestOptions ={
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'lecturerID' : lecturerID,
                'name' : lecturerName,
                'email' : lecturerEmail,
                'phoneNo' : lecturerContact
            })
        };

        await fetch(`${apiLink}/lecturers`,requestOptions)
        .then((response)=>{
            if(response.status == 200)
            {
                alert("lecturer Created Successfully");
                window.location = '/lecturer';
            }
        })
        .catch((error)=>{
            console.log(error);
        });        
    };


    return(
        <FormComponents 
            submitForm={submitForm}
            lecturer={lecturer}
            setLecturerID={setLecturerID}
            setLecturerName={setLecturerName}
            setLecturerEmail={setLecturerEmail}
            setLecturerContact={setLecturerContact}
        />
    )


}

export default LecturerCreate;