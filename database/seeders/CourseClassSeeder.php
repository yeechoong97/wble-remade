<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseClassSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('courseclass')->insert([
            [
                'courseID' =>  1,
                'semester' =>  0,
                'year' => 2022,
            ],
            [
                'courseID' =>  2,
                'semester' =>  0,
                'year' => 2022,
            ],
        ]);
    }
}
