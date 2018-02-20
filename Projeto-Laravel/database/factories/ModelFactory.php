<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */


$factory->define(App\Receita::class, function (Faker\Generator $faker) {

    return [
        'nome' => $faker->sentence(2),
        'descricao' => $faker->text,
        'tempo_preparo' => $faker->numberBetween(1,60),
        'rendimento' => $faker->numberBetween(1,100),
        'dificuldade' => $faker->numberBetween(1,10),
        'ingredientes' => $faker->sentence(5),
        'nome_foto' => $faker->time(),
        'user_id' => $faker->numberBetween(1,5)
    ];
});

$factory->define(App\User::class, function (Faker\Generator $faker) {

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->email,
        'password' => bcrypt('123456'),
    ];
});

