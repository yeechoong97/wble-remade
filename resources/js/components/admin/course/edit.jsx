import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import FormComponents from './form_components';
const apiLink = "http://127.0.0.1:8000/api";

function CourseEdit(){

    const {id} = useParams();
    const [courseCode,setCourseCode] = useState("");
    const [courseName,setCourseName] = useState("");
    const [janIntake,setjanIntake] = useState(null);
    const [mayIntake,setmayIntake] = useState(null);
    const [octIntake,setoctIntake] = useState(null);
    const course = {
        'name' : courseName,
        'code' : courseCode,
        'janIntake' : janIntake,
        'mayIntake' : mayIntake,
        'octIntake' : octIntake,
    };

    async function submitForm(event){
        event.preventDefault();
        const requestOptions ={
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'name' : courseName,
                'code': courseCode,
                'janIntake' : janIntake==true? 1 : 0,
                'mayIntake': mayIntake==true? 1: 0 ,
                'octIntake': octIntake==true? 1: 0,
            })
        };

        await fetch(`${apiLink}/courses/${id}`,requestOptions)
        .then((response)=>{
            if(response.status == 200)
            {
                alert("Course Updated Successfully");
                window.location = '/course';
            }
        })
        .catch((error)=>{
            console.log(error);
        });        
    };

    function retrieveData(){
        fetch(`${apiLink}/courses/${id}`)
        .then((response)=> response.json())
        .then((response)=> {
            setCourseCode(response.code);
            setCourseName(response.name);
            setjanIntake(response.janIntake == 1 ? true : false);
            setmayIntake(response.mayIntake == 1 ? true : false);
            setoctIntake(response.octIntake == 1 ? true : false);
        });

    }

    useEffect(()=>{
        retrieveData();
    },[]);


    return(
        <FormComponents 
            submitForm={submitForm}
            course={course}
            setCourseCode={setCourseCode}
            setCourseName={setCourseName}
            setjanIntake={setjanIntake}
            setmayIntake={setmayIntake}
            setoctIntake={setoctIntake}
        />
    )


}

export default CourseEdit;