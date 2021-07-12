<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseClassLecturer extends Model
{
    use HasFactory;

    protected $table ="courseclass_lecturer";

    protected $fillable=[
        "courseClassID",
        "lecturerID",
    ];
}
