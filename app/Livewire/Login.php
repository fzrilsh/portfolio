<?php

namespace App\Livewire;

use Illuminate\Support\Facades\Auth;
use Livewire\Attributes\Layout;
use Livewire\Attributes\Rule;
use Livewire\Attributes\Title;
use Livewire\Component;

#[Layout('layouts.app')]
#[Title('Login')]
class Login extends Component
{
    #[Rule('required|string')]
    public $name;
    
    #[Rule('required|string|min:8')]
    public $password;

    public function mount(){
        if(Auth::check()) return $this->redirect(route('admin.dashboard'));
    }

    public function render()
    {
        return view('livewire.login');
    }

    public function login(){
        $params = $this->validate();
        if(!auth('web')->attempt($params)) return $this->addError('invalid', 'Name or Password incorrect.');

        return redirect()->route('admin.dashboard');
    }
}
