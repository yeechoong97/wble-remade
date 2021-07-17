import React from 'react';

function FormComponents({courseClass,courseClassInfo,setCourseDetails,setSemester,setSelectedYear,selectCourse,addLecturers,addStudents,submitForm,checkStudents,checkLecturers,editClass}){
    return (
        <div className="container border my-5">
            <form onSubmit={submitForm}>
            <div className="container">
                <div className="px-5 py-3 form-inline ">
                    <label>Course Name :</label>
                    <select className="form-control mx-3 col-md-7 ml-auto" onChange={(event)=>setCourseDetails(event.target.options,event.target.value)} defaultValue={courseClass.courseName} disabled={editClass} >
                        {courseClassInfo.courses.map((course)=>(
                            <option key={course.id} data-key={course.id} value={course.code}>{course.name}</option>
                        ))}
                    </select>
                </div>
                <div className="px-5 py-3 form-inline">
                    <label>Course Code :</label>
                    <input type="text" className="form-control mx-3 col-md-7 ml-auto" value={courseClass.courseCode} readOnly/>
                </div>
                <div className="px-5 py-3 form-inline">
                    <label>Semester :</label>
                    <select className="form-control mx-3 col-md-7 ml-auto" onChange={(event)=>setSemester(event.target.value)} value={courseClass.semester} disabled={editClass}>
                        <option key="1" value="1">Jan</option>
                        <option key="2" value="2">May</option>
                        <option key="3" value="3">Oct</option>
                    </select>
                </div>
                <div className="px-5 py-3 form-inline">
                    <label>Year :</label>
                    <select className="form-control mx-3 col-md-7 ml-auto" onChange={(event)=>setSelectedYear(event.target.value)} disabled={editClass}>
                        {courseClassInfo.yearRange.map((value)=>(
                            <option key={value} value={value}>{value}</option>
                        ))}
                    </select>
                </div>
                <div className={`px-5 py-3 text-center ${editClass ? "d-none" : "d-block"}`}>
                    <a className="btn btn-primary btn-sm" onClick={()=>selectCourse()}>Next</a>
                </div>
            </div>
            <div className={`container ${courseClassInfo.courseCompleted ? "d-block" : "d-none" }`}>
                <h4>Lecturer</h4>
            <table className="border table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Faculty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {courseClassInfo.lecturers.map((lecturer)=>
                    (<tr key={lecturer.id}>
                        <td>{lecturer.lecturerID}</td>
                        <td>{lecturer.name}</td>
                        <td>{lecturer.email}</td>
                        <td>{lecturer.phoneNo}</td>
                        <td>{lecturer.faculty}</td>
                        <td><input type="checkbox" value={lecturer.id} onClick={()=>addLecturers(lecturer.id)} defaultChecked={checkLecturers(lecturer.id)}></input></td>
                    </tr>)
                    )}
                </tbody>
            </table>
            </div>
            <div className={`container ${courseClassInfo.lecturerCompleted ? "d-block" : "d-none"}`}>
            <h4>Student</h4>
            <table className="border table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Faculty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {courseClassInfo.students.map((student)=>
                    (<tr key={student.id}>
                        <td>{student.studentID}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.phoneNo}</td>
                        <td>{student.faculty}</td>
                        <td><input type="checkbox" value={student.id} onClick={()=>addStudents(student.id)} defaultChecked={checkStudents(student.id)}></input></td>
                    </tr>)
                    )}
                </tbody>
            </table>
            <div className="px-5 py-3 text-center">
                <button className="btn btn-success">Submit</button>
            </div>
            </div>   
            </form>                  
        </div>
    )
}

export default FormComponents;