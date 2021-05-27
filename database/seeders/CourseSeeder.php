<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('courses')->insert([
            [
                'name' =>  'Ancient Programming COBOL',
                'code' =>  'UECS1234',
                'janIntake' => 1,
                'mayIntake' => 0,
                'octIntake' => 0,
            ],
            [
                'name' =>  'Python Programming',
                'code' =>  'UECS1235',
                'janIntake' => 1,
                'mayIntake' => 1,
                'octIntake' => 0,
            ],
            [
                'name' =>  'C Sharp Programming',
                'code' =>  'UECS1237',
                'janIntake' => 0,
                'mayIntake' => 1,
                'octIntake' => 0,
            ],
            [
                'name' =>  'Next.JS',
                'code' =>  'UECS1236',
                'janIntake' => 0,
                'mayIntake' => 0,
                'octIntake' => 1,
            ],
        ]);
    }
}
