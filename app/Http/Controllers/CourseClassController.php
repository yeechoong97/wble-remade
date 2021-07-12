<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Student;
use App\Models\Lecturer;
use App\Models\CourseClass;
use App\Models\CourseClassLecturer;
use App\Models\CourseClassStudent;
use App\Models\CompleteCourseClass;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;


class CourseClassController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $currentMonth = Carbon::now()->month;
        $currentYear = Carbon::now()->year;
        $selectedSemester= CourseClassController::checkSemester($currentMonth);

        $classes = CourseClass::where('semester',$selectedSemester)->where('year',$currentYear)->get();
        $arrayResult = [];
        foreach($classes as $class)
        {
            $lecturer = CourseClassLecturer::where('courseClassID',$class->id)->count();
            $student = CourseClassStudent::where('courseClassID',$class->id)->count();
            $course = Course::findorFail($class->courseID);
            $intake = CourseClassController::convertToIntake($class->semester);
            $completeClass = new CompleteCourseClass();
            $completeClass->id = $class->id;
            $completeClass->courseID = $class->courseID;
            $completeClass->courseName = $course->name;
            $completeClass->semester = $intake;
            $completeClass->year = $class->year;
            $completeClass->countLecturer = $lecturer;
            $completeClass->countStudent = $student;
            array_push($arrayResult,$completeClass);
        }    
        return response()->json($arrayResult, 200);

    }

    public function checkSemester($currentMonth){
        $selectedSemester = 3;
        if($currentMonth>=1 && $currentMonth<=3)
            $selectedSemester = 1;
        else if($currentMonth>=4 && $currentMonth<=8)
            $selectedSemester = 2;
        return $selectedSemester;
    }

    public function convertToIntake($semester)
    {
        $intake = "Jan";
        if($semester==2)
            $intake = "May";
        else if($semester ==3)
            $intake = "Oct";
        return $intake;
    }

    public function revertSemester($semester)
    {
        $intake = 1;
        if($semester=="May")
            $intake =2;
        else if($semester=="Oct")
            $intake = 3;
        return $intake;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $semester = CourseClassController::revertSemester($request->semester);
        $course = CourseClass::create([
            'courseID'=> $request->courseID,
            'semester'=> $semester,
            'year' => $request->year,
        ]);
        foreach($request->students as $student)
        {
            CourseClassStudent::create([
                'courseClassID' => $course->id,
                'studentID' => $student
            ]);
        }

        foreach($request->lecturers as $lecturer)
        {
            CourseClassLecturer::create([
                'courseClassID' => $course->id,
                'lecturerID' => $lecturer
            ]);
        }

        return response()->json('success',200);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
