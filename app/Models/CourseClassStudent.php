<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseClassStudent extends Model
{
    use HasFactory;
    
    protected $table ="courseclass_student";

    protected $fillable=[
        "courseClassID",
        "studentID",
    ];
}
