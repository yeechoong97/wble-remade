<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
<<<<<<< HEAD
        "code",
=======
        "code"
>>>>>>> 6a6f2d74586bed20065a27157b1bf3687af1ae7d
    ];
}
