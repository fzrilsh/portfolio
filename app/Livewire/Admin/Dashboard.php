<?php

namespace App\Livewire\Admin;

use App\Models\Viewer;
use Illuminate\Support\Facades\DB;
use Livewire\Attributes\Layout;
use Livewire\Attributes\Title;
use Livewire\Component;

#[Layout('layouts.admin')]
#[Title('Admin Dashboard')]
class Dashboard extends Component
{
    public function with(){
        return [
            'viewers' => Viewer::query()->select(
                DB::raw('MONTHNAME(created_at) as month'),
                DB::raw('COUNT(*) as total')
            )
            ->groupBy(DB::raw('MONTHNAME(created_at)'))
            ->get()
        ];
    }

    public function render()
    {
        return view('livewire.admin.dashboard', $this->with());
    }
}
