<?php

namespace Database\Seeders;

use App\Models\Achivement;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AchivementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Achivement::query()->create([
            'title' => 'LKS National Lampung 2024',
            'description' => '1st winnner of web technologies',
            'date' => '2024-08-23',
            'image' => 'achivements/lks-national-lampung-2024.jpg'
        ]);
    }
}
