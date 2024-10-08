<?php

namespace App\Livewire;

use App\Models\Achivement;
use App\Models\Work;
use Livewire\Attributes\Layout;
use Livewire\Attributes\Title;
use Livewire\Component;

#[Layout('layouts.app')]
#[Title('About Myself')]
class About extends Component
{
    public function with(){
        return [
            'achivements' => Achivement::all(),
            'works' => Work::all()
        ];
    }

    public function render()
    {
        return view('livewire.about', $this->with());
    }
}
