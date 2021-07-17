<?php

namespace Database\Factories;

use App\Models\Student;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class StudentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Student::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'studentID' => $this->faker->unique()->numberBetween(1000000,2000000),
            'name' => $this->faker->name,
            'email'=> $this->faker->unique()->email,
            'phoneNo' => $this->faker->e164PhoneNumber(),
            'faculty'=> $this->faker->randomElement(["LKCFES","CEE","FAM","FCI"]),
        ];
    }
}
