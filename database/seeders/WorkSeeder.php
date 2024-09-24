<?php

namespace Database\Seeders;

use App\Models\Work;
use Illuminate\Database\Seeder;

class WorkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            ['as' => 'Fullstack Developer & DevOps', 'company' => 'Freelance', 'period' => '2017 - present', 'link' => '/'],
            ['as' => 'Backend Developer & PMMP Developer', 'company' => 'RFA Store', 'period' => '2018 - 2020', 'link' => '#'],
            ['as' => 'Fullstack Developer', 'company' => 'Verdant Network System', 'period' => '2022 - present', 'link' => 'https://www.instagram.com/verdantns.tech/'],
            ['as' => 'Fullstack Developer', 'company' => 'Sinaps Teknologi', 'period' => '2024 - present', 'link' => 'https://sinapsteknologi.id/']
        ])->each(function($v) {
            Work::query()->create($v);
        });
    }
}
