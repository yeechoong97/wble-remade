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
