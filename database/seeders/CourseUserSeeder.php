<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('course_user')->insert([
            [
                'course_id' =>  1,
                'user_id' =>  1,
            ],
            [
                'course_id' =>  2,
                'user_id' =>  1,
            ],
            [
                'course_id' =>  3,
                'user_id' =>  2,
            ]
        ]);
    }
}
