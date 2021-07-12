<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseClass extends Model
{
    use HasFactory;

    protected $table="courseclass";

    protected $fillable = [
        'courseID',
        'semester',
        'year'
    ];
}
