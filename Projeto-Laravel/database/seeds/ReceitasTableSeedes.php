<?php

use Illuminate\Database\Seeder;

class ReceitasTableSeedes extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      factory(App\Receita::class, 10)->create();
    }
}
