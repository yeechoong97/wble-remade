<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'username' =>  '1801234',
                'password' => Hash::make('password'),
                'role' => 'student',
            ],
            [
                'username' =>  'admin@admin.com',
                'password' => Hash::make('password'),
                'role' => 'admin'
            ],
            [
                'username' =>  'lecturer@edu.my',
                'password' => Hash::make('password'),
                'role' => 'lecturer',
            ],
        ]);
    }
}
