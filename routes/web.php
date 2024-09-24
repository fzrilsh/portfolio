<?php

use App\Livewire\About;
use App\Livewire\Blogs;
use App\Livewire\Home;
use App\Livewire\Project;
use Illuminate\Support\Facades\Route;

Route::get('/', Home::class)->name('home');
Route::get('/about', About::class)->name('about');
Route::get('/projects', Project::class)->name('projects');
Route::get('/blogs', Blogs::class)->name('blogs');