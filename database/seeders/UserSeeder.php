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
                'username' =>  'Benjamin',
                'password' => Hash::make('password'),
            ],
            [
                'username' =>  'Admin',
                'password' => Hash::make('password'),
            ],
            [
                'username' =>  'Jackie',
                'password' => Hash::make('password'),
            ],
            [
                'username' =>  'Megan',
                'password' => Hash::make('password'),
            ],
            [
                'username' =>  'Jolin',
                'password' => Hash::make('password'),
            ],
        ]);
    }
}
