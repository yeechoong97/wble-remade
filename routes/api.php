<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\CourseClassController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\LecturerController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('user', [UserController::class, 'index']);
Route::post('user', [UserController::class, 'store']);
Route::put('user/{id}', [UserController::class, 'update']);
Route::delete('user/{id}', [UserController::class, 'destroy']);

Route::resource('class',CourseClassController::class);
Route::resource('courses', CourseController::class);
Route::resource('students',StudentController::class);
Route::resource('lecturers',LecturerController::class);

//Course Class API
Route::get('courseclass',[CourseClassController::class,'index']);
Route::post('courseclass',[CourseClassController::class,'store']);
Route::get('courseclass/faculty/{faculty}',[CourseClassController::class,'getLecturerStudent']);
Route::get('courseclass/{id}',[CourseClassController::class,'edit']);
Route::put('courseclass/{id}',[CourseClassController::class,'update']);
Route::delete('courseclass/{id}',[CourseClassController::class,'destroy']);

//Student Access Index
Route::get('courseclass/student/{id}',[CourseClassController::class,'studentIndex']);
Route::get('courseclass/student/course/{id}',[CourseClassController::class,'courseDetails']);


Route::group(['middleware' => ['jwt.auth','api-header']], function () {
  
    // all routes to protected resources are registered here  
    Route::get('users/list', function(){
        $users = App\Models\User::all();
        
        $response = ['success'=>true, 'data'=>$users];
        return response()->json($response, 201);
    });
});
Route::group(['middleware' => 'api-header'], function () {
  
    // The registration and login requests doesn't come with tokens 
    // as users at that point have not been authenticated yet
    // Therefore the jwtMiddleware will be exclusive of them

    Route::post('user/login', [UserController::class,'login']);
    Route::post('user/register', [UserController::class,'register']);
});