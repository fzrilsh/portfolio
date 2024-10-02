<?php

use App\Http\Middleware\MaintenanceSwitcher;
use App\Http\Middleware\ViewerGateMiddleware;
use Illuminate\Support\Facades\Route;

use App\Livewire\Admin\Dashboard as AdminDashboard;
use App\Livewire\Admin\Blogs as AdminBlogs;
use App\Livewire\Admin\CreateBlog as AdminCreateBlog;
use App\Livewire\Admin\EditBlog as AdminEditBlog;

use App\Livewire\About;
use App\Livewire\Blogs;
use App\Livewire\Home;
use App\Livewire\Login;
use App\Livewire\Project;
use App\Livewire\ReadBlog;

Route::middleware([ViewerGateMiddleware::class, MaintenanceSwitcher::class])->group(function(){
    Route::get('/', Home::class)->name('home');
    Route::get('/about', About::class)->name('about');
    Route::get('/projects', Project::class)->name('projects');
    Route::get('/blogs', Blogs::class)->name('blogs');
    Route::get('/blogs/{slug}', ReadBlog::class)->name('blogs.read');
});

Route::prefix('admin')->group(function(){
    Route::get('/login', Login::class)->name('admin.login');

    Route::middleware('auth:sanctum')->group(function(){
        Route::get('/', AdminDashboard::class)->name('admin.dashboard');
        Route::get('/blog', AdminBlogs::class)->name('admin.blogs');
        Route::get('/blog/create', AdminCreateBlog::class)->name('admin.blogs.create');
        Route::get('/blog/edit/{id}', AdminEditBlog::class)->name('admin.blogs.edit');

        Route::get('/logout', function(){
            auth('web')->logout();
            return redirect()->route('admin.login');
        })->name('admin.logout');
    });
});