import React, {useState,useEffect} from 'react';
import FormComponents from './form_components';
const apiLink = "http://127.0.0.1:8000/api";

function ClassCreate(){

    //retrieve all initial values
    const [courses,setCourse] = useState([]);
    const [lecturers,setLecturer] = useState([]);
    const [students,setStudent] = useState([]);
    const [year,setYear] = useState([]);

    //Required for save into database
    const [savedLecturers] = useState([]);
    const [savedStudents] = useState([]);
    const [courseCode,setCourseCode] = useState("");
    const [courseID,setCourseID] = useState("");
    const [semester,setSemester] = useState(1);
    const [selectedYear,setSelectedYear] = useState(null);

    //Use for hide and show the division
    const [courseCompleted,setCourseCompleted] = useState(false);
    const [lecturerCompleted,setLecturerCompleted] = useState(false);
    const editClass = false;

    const courseClass = {
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
    function retrieveAll(){
        //retrieve all courses
        fetch(`${apiLink}/courses`)
        .then((response)=>response.json())
        .then((response)=> {
            setCourse(response);
            setCourseCode(response[0].code);
            setCourseID(response[0].id);
        });
    }

    //select course and retrieve related lecturers/students
    function selectCourse(){
        //retrieve all lecturers
        fetch(`${apiLink}/courseclass/faculty/${courseCode}`)
        .then((response)=> response.json())
        .then((response)=>{
            setStudent(response[0]);
            setLecturer(response[1]);
        })
        setCourseCompleted(true);
        setLecturerCompleted(true);
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

    //check lecturers record
    function checkLecturers(id){
        return false;
    }

    //check students record
    function checkStudents(id){
        return false;
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

    useEffect(()=>{
        retrieveAll();
        getYear();
    },[]);



    async function submitForm(event){
        event.preventDefault();
 
        const requestOptions ={
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'courseID' : courseClass.courseID,
                'semester': courseClass.semester,
                'year' : courseClass.year,
                'lecturers' : courseClass.lecturers,
                'students': courseClass.students,
            })
        };

        await fetch(`${apiLink}/courseclass`,requestOptions)
        .then((response)=>{
            if(response.status == 200)
            {
                alert("Class Created Successfully");
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
            checkStudents = {checkStudents}
            checkLecturers = {checkLecturers}
            editClass ={editClass}
        />
    )


}

export default ClassCreate;