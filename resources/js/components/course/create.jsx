import React, {useState,useEffect} from 'react';

function CourseCreate(){

    return(
        <div className="container border">
            <form method="post">
            <div className="px-5 py-3 form-inline">
                <label>Course Code :</label>
                <input type="text" className="form-control mx-3 col-md-7"></input>
            </div>
            <div className="px-5 py-3 form-inline">
                <label>Course Name :</label>
                <input type="text" className="form-control mx-3 col-md-7"></input>
            </div>
            <div className="px-5 py-3 form-inline">
                <label>Intakes :</label>
                <div className="form-check mx-3">
                    <input className="form-check-input" type="checkbox" value="janIntake" />
                    <label className="form-check-label">Jan</label>
                </div>
                <div className="form-check mx-3">
                    <input className="form-check-input" type="checkbox" value="mayIntake" />
                    <label className="form-check-label">May</label>
                </div>
                <div className="form-check mx-3">
                    <input className="form-check-input" type="checkbox" value="octIntake" />
                    <label className="form-check-label">Oct</label>
                </div>
            </div>
            <div className="px-5 py-3">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            </form>
        </div>
    )


}

export default CourseCreate;