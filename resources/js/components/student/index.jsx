import {react, useState,useEffect} from 'react';
import AuthService from '../../components/auth/auth.service';

const apiLink = "http://127.0.0.1:8000/api";

function StudentHome(){

    const [courseEnrolled,setCourseEnrolled] = useState([]);

    function checkLoginState(){
        const loginState = AuthService.getCurrentUser();
        if(!loginState)
            window.location = "/login";
        else
        retrieveClass(loginState.user.id);
    }

    async function retrieveClass(id){
        const response = await fetch(`${apiLink}/courseclass/student/${id}`)
        const courseResult = await response.json();
        setCourseEnrolled(courseResult);
    }

    useEffect(()=>{
        checkLoginState();
    },[]);


    return (
        <div className="container">
            <div className="row">Student Home</div>
            {courseEnrolled.map((course)=>(
                <div className="row" key={course.id}>
                    <a href={"/student/course/" + course.id} className="text-primary">{course.code} {course.name}</a>
                </div>
            ))}
        </div>
    )


}

export default StudentHome
