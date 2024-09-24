<?php

namespace App\Livewire;

use App\Models\Project as ModelsProject;
use Livewire\Attributes\Layout;
use Livewire\Attributes\Title;
use Livewire\Component;

#[Layout('layouts.app')]
#[Title('My Projects')]
class Project extends Component
{
    public function with(){
        return [
            'projects' => ModelsProject::all()
        ];
    }

    public function render()
    {
        return view('livewire.project', $this->with());
    }
}
