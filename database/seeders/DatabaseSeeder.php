<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            AchivementSeeder::class,
            BlogSeeder::class,
            WorkSeeder::class
        ]);

        User::query()->create([
            'name' => 'fazrilsh',
            'password' => Hash::make('password123__000')
        ]);
    }
}
