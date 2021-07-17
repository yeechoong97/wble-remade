<?php

namespace Database\Factories;

use App\Models\Course;
use Illuminate\Database\Eloquent\Factories\Factory;

class CourseFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Course::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $code = $this->faker->unique()->numberBetween(1000,9999);
        $code_name = $this->faker->randomElement(['UECS','UEAA','UEBB','UEDD']);
        return [
            'name' =>  $this->faker->unique()->domainWord(),
            'code' =>  $code_name.$code,
            'janIntake' => $this->faker->numberBetween(0, 1),
            'mayIntake' => $this->faker->numberBetween(0, 1),
            'octIntake' => $this->faker->numberBetween(0, 1),
        ];
    }
}
