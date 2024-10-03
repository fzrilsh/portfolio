<?php

namespace App\Livewire\Admin;

use App\Models\Project;
use Livewire\Attributes\Layout;
use Livewire\Attributes\Title;
use Livewire\Component;
use Livewire\WithFileUploads;
use TallStackUi\Traits\Interactions;

#[Layout('layouts.admin')]
#[Title('Create Project')]
class CreateProject extends Component
{
    use Interactions, WithFileUploads;

    public $thumbnail;
    public $title = '';
    public $description = '';
    public $link = '';

    public function deleteUpload(){
        if($this->thumbnail){
            $this->thumbnail->delete();
            $this->thumbnail = null;
        }
    }

    public function render()
    {
        return view('livewire.admin.create-project');
    }

    public function rules(){
        return [
            'thumbnail' => 'required',
            'title' => 'required|min:5',
            'description' => 'required|min:10',
            'link' => 'string',
        ];
    }

    public function updatedLink($value){
        if(str_contains($value, 'https')) $value = str_replace('https://', '', $value);
        if(str_contains($value, 'http')) $value = str_replace('http://', '', $value);
        
        $this->link = $value;
    }

    public function save(){
        $params = $this->validate();

        try {
            if(!$params['link']){
                $params['link'] = '/#';
            }else{
                $params['link'] = 'http://' . $params['link'];
            }

            $project = Project::query()->create([
                ...$params,
                'image' => '#'
            ]);

            $image = $this->thumbnail->storeAs('public/projects/' . $project->id, 'thumbnail.png');
            $project->image = str_replace('public/', '', $image);
            $project->save();

            $this->toast()->success('Berhasil!', 'project berhasil di simpan')->flash()->send();
            return redirect()->route('admin.projects.edit', ['id' => $project->id]);
        } catch (\Throwable $th) {
            dd($th);
            $this->toast()->error('Error Occured', 'Terjadi error saat ingin save project, silahkan coba lagi.')->timeout(5)->send();
        }
    }
}
