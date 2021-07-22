import { useState,useEffect } from "react";
import { useParams } from "react-router";
const apiLink = "http://127.0.0.1:8000/api";


function CourseDetails(){

    const {id} = useParams();
    const [course,setCourse] = useState([]);
    const [week,setWeek] = useState([]);

    function retrieveData(){
        fetch(`${apiLink}/courseclass/student/course/${id}`)
        .then((response)=>response.json())
        .then((response)=>{
            setCourse(response[0]);
            setWeek(response[1]);
        })
    }

    useEffect(()=>{
        retrieveData();
    },[])

    return(
        <div className="container">
            {
                week.map((item,index)=>(
                    <div>Week {index+1} {item}</div>
                ))
            }
        </div>
    )

}

export default CourseDetails