<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('students')->insert([
            [
                'studentID' => "1801234",
                'name'=> "Benjamin",
                'email' => "benjamin@gmail.com",
                'phoneNo' => "0123456789"
            ],
            [
                'studentID' => "1801235",
                'name'=> "Jackie",
                'email' => "jackie@gmail.com",
                'phoneNo' => "0123456789"
            ],
        ]);
    }
}
