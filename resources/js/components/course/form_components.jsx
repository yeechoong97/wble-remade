import React from 'react';

function FormComponents({submitForm,course,setCourseCode,setCourseName,setjanIntake,setmayIntake,setoctIntake}){
    return(
        <div className="container border">
            <form onSubmit={submitForm}>
            <div className="px-5 py-3 form-inline">
                <label>Course Code :</label>
                <input type="text" className="form-control mx-3 col-md-7" value={course.code} onChange={(event)=> setCourseCode(event.target.value)} />
            </div>
            <div className="px-5 py-3 form-inline">
                <label>Course Name :</label>
                <input type="text" className="form-control mx-3 col-md-7" value={course.name} onChange={(event)=> setCourseName(event.target.value)} />
            </div>
            <div className="px-5 py-3 form-inline">
                <label>Intakes :</label>
                <div className="form-check mx-3">
                    <input className="form-check-input" type="checkbox" value="janIntake" onClick={()=>setjanIntake(!course.janIntake)} defaultChecked={course.janIntake}/>
                    <label className="form-check-label">Jan</label>
                </div>
                <div className="form-check mx-3">
                    <input className="form-check-input" type="checkbox" value="mayIntake" onClick={()=>setmayIntake(!course.mayIntake)} defaultChecked={course.mayIntake}/>
                    <label className="form-check-label">May</label>
                </div>
                <div className="form-check mx-3">
                    <input className="form-check-input" type="checkbox" value="octIntake" onClick={()=>setoctIntake(!course.octIntake)} defaultChecked={course.octIntake}/>
                    <label className="form-check-label">Oct</label>
                </div>
            </div>
            <div className="px-5 py-3">
                <a href="/" className="btn btn-success mx-3">Back</a>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            </form>
        </div>
    )

}

export default FormComponents;