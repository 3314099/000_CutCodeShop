<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BrandFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title' => fake()->company(),
            'thumbnail' => $this->faker->fixturesImage('brands', 'images/brands'),
        ];
    }
}
