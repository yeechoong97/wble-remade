import React, {useState} from 'react';
import FormComponents from './form_components';

const apiLink = "http://127.0.0.1:8000/api";

function CourseCreate(){

    const [courseCode,setCourseCode] = useState("");
    const [courseName,setCourseName] = useState("");
    const [janIntake,setjanIntake] = useState(false);
    const [mayIntake,setmayIntake] = useState(false);
    const [octIntake,setoctIntake] = useState(false);
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
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'name' : courseName,
                'code': courseCode,
                'janIntake' : janIntake==true? 1 : 0,
                'mayIntake': mayIntake==true? 1: 0 ,
                'octIntake': octIntake==true? 1: 0,
            })
        };

        await fetch(`${apiLink}/courses`,requestOptions)
        .then((response)=>{
            if(response.status == 200)
            {
                alert("Course Created Successfully");
                window.location = '/admin/course';
            }
        })
        .catch((error)=>{
            console.log(error);
        });        
    };


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

export default CourseCreate;