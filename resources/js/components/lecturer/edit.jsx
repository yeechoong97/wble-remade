import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import FormComponents from './form_components';
const apiLink = "http://127.0.0.1:8000/api";

function LecturerEdit(){

    const {id} = useParams();
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
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'lecturerID' : lecturerID,
                'name' : lecturerName,
                'email' : lecturerEmail,
                'phoneNo' : lecturerContact
            })
        };

        await fetch(`${apiLink}/lecturers/${id}`,requestOptions)
        .then((response)=>{
            if(response.status == 200)
            {
                alert("Lecturer Updated Successfully");
                window.location = '/Lecturer';
            }
        })
        .catch((error)=>{
            console.log(error);
        });        
    };

    function retrieveData(){
        fetch(`${apiLink}/lecturers/${id}`)
        .then((response)=> response.json())
        .then((response)=> {
            setLecturerID(response.lecturerID);
            setLecturerName(response.name);
            setLecturerEmail(response.email);
            setLecturerContact(response.phoneNo);
        });

    }

    useEffect(()=>{
        retrieveData();
    },[]);


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

export default LecturerEdit;