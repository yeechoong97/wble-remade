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
                'userID' => '1801234',
                'name' =>  'Benjamin',
                'email' =>  'Benjamin@gmail.com',
                'role' => 1,
                'password' => Hash::make('password'),
            ],
            [
                'userID' => '1801235',
                'name' =>  'Thean Chun',
                'email' =>  'tc@gmail.com',
                'role' => 1,
                'password' => Hash::make('password'),
            ],
            [
                'userID' => 'ben@ben',
                'name' =>  'Ben Ten',
                'email' =>  'ben10@gmail.com',
                'role' => 2,
                'password' => Hash::make('password'),
            ],
            [
                'userID' => 'lim@lim',
                'name' =>  'Jakie',
                'email' =>  'jakie@gmail.com',
                'role' => 2,
                'password' => Hash::make('password'),
            ],
            [
                'userID' => 'admin123',
                'name' =>  'Admin',
                'email' =>  'admin@gmail.com',
                'role' => 0,
                'password' => Hash::make('password'),
            ],
        ]);
    }
}
