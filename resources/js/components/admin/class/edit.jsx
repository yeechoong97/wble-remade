import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import FormComponents from './form_components';
const apiLink = "http://127.0.0.1:8000/api";

function ClassEdit(){
    //retrieve all initial values
    const {id} = useParams();
    const [courses,setCourse] = useState([]);
    const [lecturers,setLecturer] = useState([]);
    const [students,setStudent] = useState([]);
    const [year,setYear] = useState([]);

    //Required for save into database
    const [savedLecturers] = useState([]);
    const [savedStudents] = useState([]);
    const [courseCode,setCourseCode] = useState("");
    const [courseID,setCourseID] = useState("");
    const [courseName,setCourseName] = useState("");
    const [semester,setSemester] = useState(1);
    const [selectedYear,setSelectedYear] = useState(null);

    //Use for hide and show the division
    const [courseCompleted,setCourseCompleted] = useState(false);
    const [lecturerCompleted,setLecturerCompleted] = useState(false);
    const editClass = true;

    const courseClass = {
        'courseName' : courseName,
        'courseID' : courseID,
        'courseCode' : courseCode,
        'semester' : semester,
        'year' : selectedYear,
        'lecturers' : savedLecturers,
        'students' : savedStudents,
    };

    const courseClassInfo ={
        'lecturers' : lecturers,
        'courses' : courses,
        'students' : students,
        'yearRange' : year,
        'courseCompleted' : courseCompleted,
        'lecturerCompleted' : lecturerCompleted,
    }

    //retrieve all courses, students and lecturers
    async function retrieveAll(){
        //retrieve all courses
        const result = await fetch(`${apiLink}/courses`)
        const response = await result.json();
        setCourse(response);
        const courseID = await retrieveRecord();
        validateCourseName(response,courseID);
    }

    //Retrieve existing record
    async function retrieveRecord(){
        return fetch(`${apiLink}/courseclass/${id}`)
        .then((response)=>response.json())
        .then((response)=>{
            setCourseID(response[0].courseID);
            setSelectedYear(response[0].year);
            setSemester(response[0].semester);
            response[1].forEach((item)=>{
                savedLecturers.push(item.lecturerID);
            })
            response[2].forEach((item)=>{
                savedStudents.push(item.studentID);
            })
            return response[0].courseID;
        });
        
    }

    //check and compare the selected coursename
    function validateCourseName(response,id){
        response.forEach((item)=>{
            if(item.id == id)
            {
                setCourseCode(item.code);
                setCourseName(item.name);
                selectDefaultCourse(item.code);
            }
        });
    }

    //select course and retrieve related lecturers/students
    function selectDefaultCourse(selectedCode){
        //retrieve all lecturers
        fetch(`${apiLink}/courseclass/faculty/${selectedCode}`)
        .then((response)=> response.json())
        .then((response)=>{
            setStudent(response[0]);
            setLecturer(response[1]);
        })
        setCourseCompleted(true);
        setLecturerCompleted(true);
    }

    //select course and retrieve related lecturers/students
    function selectCourse(){
        return null
    }


    //get current year and additional one year
    function getYear(){
        var date = new Date();
        var yearArray = [date.getFullYear(),date.getFullYear()+1];
        setYear(yearArray);
        setSelectedYear(date.getFullYear());
    }

    //Add checked lecturers into array 
    function addLecturers(id){
        var checked = validateExistingElements(id,savedLecturers);
        if(checked)
            savedLecturers.push(id);
            
    }

    //Add checked students into array
    function addStudents(id){
        var checked = validateExistingElements(id,savedStudents);
        if(checked)
            savedStudents.push(id);
    }

    //check existing elements in array
    function validateExistingElements(id,arrayElements){
        var checked = true;
        arrayElements.forEach((element,index)=>{
            if(element == id){
                checked=false;
                arrayElements.splice(index,1);
            }
        });
        return checked;
    }

    //set selectec course code and ID
    function setCourseDetails(options,value)
    {
        var index = options['selectedIndex'];
        setCourseID(options[index].getAttribute("data-key"));
        setCourseCode(value);
        setCourseCompleted(false);
        setLecturerCompleted(false);
    }

    //append existing student
    function checkStudents(id)
    {
        return savedStudents.includes(id);
    }

    //append existing lecturers
    function checkLecturers(id)
    {
        return savedLecturers.includes(id);
    }

    useEffect(()=>{
        retrieveAll();
        getYear();
    },[]);


    function submitForm(event){
        event.preventDefault();
        const requestOptions ={
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'lecturers' : courseClass.lecturers,
                'students': courseClass.students,
            })
        };

        fetch(`${apiLink}/class/${id}`,requestOptions)
        .then((response)=>{
            if(response.status == 200)
            {
                alert("Class Updated Successfully");
                window.location = '/admin/class';
            }
        })
        .catch((error)=>{
            console.log(error);
        });        
    };


    return(
        <FormComponents 
            courseClass ={courseClass}
            courseClassInfo = {courseClassInfo}
            setCourseDetails = {setCourseDetails}
            setSemester = {setSemester}
            setSelectedYear = {setSelectedYear}
            addStudents = {addStudents}
            addLecturers = {addLecturers}
            selectCourse = {selectCourse}
            submitForm ={submitForm}
            checkStudents={checkStudents}
            checkLecturers = {checkLecturers}
            editClass= {editClass}
        />
    )


}

export default ClassEdit;