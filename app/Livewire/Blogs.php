<?php

namespace App\Livewire;

use App\Models\Blog;
use Livewire\Attributes\Layout;
use Livewire\Attributes\Title;
use Livewire\Component;

#[Layout('layouts.app')]
#[Title('My Blogs')]
class Blogs extends Component
{
    public function with(){
        return [
            'blogs' => Blog::query()->where('status', 'publish')->get()
        ];
    }

    public function render()
    {
        return view('livewire.blogs', $this->with());
    }
}
