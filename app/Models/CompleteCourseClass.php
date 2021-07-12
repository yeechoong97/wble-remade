<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompleteCourseClass extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'courseID',
        'courseName',
        'semester',
        'year',
        'countLecturer',
        'countStudent'
    ];
}
