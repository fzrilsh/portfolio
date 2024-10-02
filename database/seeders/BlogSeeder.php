<?php

namespace Database\Seeders;

use App\Models\Blog;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Blog::query()->create([
            'slug' => 'dummy-blog-1',
            'title' => 'Dummy Blog 1',
            'content' => 'Lorem ipsum dolor sit amet',
            'status' => 'publish',
            'image' => 'blogs/dummy-blog-1.jpg'
        ]);
    }
}
