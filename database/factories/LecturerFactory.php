<?php

namespace Database\Factories;

use App\Models\Lecturer;
use Illuminate\Database\Eloquent\Factories\Factory;

class LecturerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Lecturer::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $name = $this->faker->unique()->firstName('male'|'female');
        return [
            'lecturerID' => $name."@edu.my",
            'name' => $name,
            'email'=> $this->faker->unique()->email,
            'phoneNo' => $this->faker->e164PhoneNumber(),
            'faculty'=> $this->faker->randomElement(["LKCFES","CEE","FAM","FCI"]),
        ];
    }
}
