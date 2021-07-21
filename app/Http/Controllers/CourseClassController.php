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
use App\Models\User;
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

        $classes = CourseClass::where('semester',$selectedSemester)->where('year',$currentYear)->orderBy('courseID','asc')->get();
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

    public function getLecturerStudent($faculty)
    {
        $selectedFaculty = "";
        if(str_contains($faculty,"UECS"))
            $selectedFaculty = "LKCFES";
        else if(str_contains($faculty,"UEAA"))
            $selectedFaculty = "FAM";
        else if(str_contains($faculty,"UEBB"))
            $selectedFaculty = "CEE";
        else if(str_contains($faculty,"UEDD"))
            $selectedFaculty = "FCI";
        
        $student = Student::where('faculty',$selectedFaculty)->get();
        $lecturer = Lecturer::where('faculty',$selectedFaculty)->get();

        return response()->json([$student,$lecturer],200);

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
        $course = CourseClass::create([
            'courseID'=> $request->courseID,
            'semester'=> $request->semester,
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
        $courseclass = CourseClass::findorFail($id);
        $courseclass_lecturer = CourseClassLecturer::where('courseClassID',$id)->get();
        $courseclass_student = CourseClassStudent::where('courseClassID',$id)->get();
        return response()->json([$courseclass,$courseclass_lecturer,$courseclass_student],200);
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
        CourseClassLecturer::where('courseClassID',$id)->delete();
        CourseClassStudent::where('courseClassID',$id)->delete();
        foreach($request->students as $student)
        {
            CourseClassStudent::create([
                'courseClassID' => $id,
                'studentID' => $student
            ]);
        }

        foreach($request->lecturers as $lecturer)
        {
            CourseClassLecturer::create([
                'courseClassID' => $id,
                'lecturerID' => $lecturer
            ]);
        }

        return response()->json('success',200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        CourseClass::where('id',$id)->delete();
        CourseClassLecturer::where('courseClassID',$id)->delete();
        CourseClassStudent::where('courseClassID',$id)->delete();

        return response()->json('success',200);
    }


    public function studentIndex($id)
    {
        $tempClass = [];
        $courseEnrolled = [];
        $user = User::findorFail($id);
        $student = Student::where('studentID',$user->username)->first();
        $classEnrolled = CourseClassStudent::where('studentID',$student->id)->get();
        foreach($classEnrolled as $class)
        {
            $course = CourseClass::findorFail($class->courseClassID);
            array_push($tempClass,$course->courseID);
        }

        foreach($tempClass as $class)
        {
            $course = Course::findOrFail($class);
            array_push($courseEnrolled,$course);
        }

        return response()->json($courseEnrolled, 200);

    }
}
