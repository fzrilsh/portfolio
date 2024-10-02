<?php

namespace App\Livewire;

use App\Models\Blog;
use Livewire\Attributes\Layout;
use Livewire\Attributes\Title;
use Livewire\Component;

#[Layout('layouts.app')]
class ReadBlog extends Component
{
    public ?Blog $blog;

    public function mount(string $slug){
        $this->blog = Blog::query()->where('slug', $slug)->first();
    }

    public function render()
    {
        return view('livewire.read-blog');
    }
}
