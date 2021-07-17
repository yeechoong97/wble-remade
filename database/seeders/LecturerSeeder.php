<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Lecturer;

class LecturerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('lecturers')->insert([
        //     [
        //         'lecturerID' => "megan@megan",
        //         'name'=> "Megan Tan Hui Ling",
        //         'email' => "megan@gmail.com",
        //         'phoneNo' => "0123456789"
        //     ],
        //     [
        //         'lecturerID' => "jolin@jolin",
        //         'name'=> "Jolin Kim",
        //         'email' => "jolin@gmail.com",
        //         'phoneNo' => "0123456789"
        //     ],
        // ]);
        Lecturer::factory()->count(20)->create();
    }
}
