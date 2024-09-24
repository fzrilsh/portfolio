<?php

namespace App\Livewire;

use App\Models\Blog;
use Livewire\Attributes\Layout;
use Livewire\Component;

#[Layout('layouts.app')]
class Home extends Component
{

    public function with(){
        return [
            'blogs' => Blog::all()->take(2)
        ];
    }

    public function render()
    {
        return view('livewire.home', $this->with());
    }
}
