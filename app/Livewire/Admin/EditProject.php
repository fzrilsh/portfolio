<?php

namespace App\Livewire\Admin;

use App\Models\Project;
use Illuminate\Support\Facades\File;
use Livewire\Attributes\Layout;
use Livewire\Attributes\Title;
use Livewire\Component;
use Livewire\WithFileUploads;
use SplFileInfo;
use SplFileObject;
use TallStackUi\Traits\Interactions;

#[Layout('layouts.admin')]
#[Title('Edit Project')]
class EditProject extends Component
{
    use Interactions, WithFileUploads;

    public ?Project $project;
    public $thumbnail;
    public $title = '';
    public $description = '';
    public $link = '';

    public function mount(string $id){
        $project = Project::query()->find($id);

        $this->project = $project;
        $this->title = $project->title;
        $this->description = $project->description;
        $this->link = str_replace('http://', '', $project->link);
        
        if($project->image){
            $this->thumbnail = collect([
                new SplFileInfo(public_path('storage/' . $project->image))
            ])->map(fn($file) => [
                'name' => $file->getFilename(),
                'extension' => $file->getExtension(),
                'size' => $file->getSize(),
                'path' => $file->getPath(),
                'url' => asset('public/storage/' . $project->image)
            ])->toArray();
        }
    }

    public function deleteUpload($content){
        if(is_array($this->thumbnail)){
            $this->project->image = '';
            $this->project->save();
            $this->thumbnail = null;

            File::delete($content['path'] . '/' . $content['real_name']);
        }else{
            $this->thumbnail->delete();
            $this->thumbnail = null;
        }
    }

    public function render()
    {
        return view('livewire.admin.edit-project');
    }

    public function rules(){
        return [
            'thumbnail' => 'required',
            'title' => 'string|min:5',
            'description' => 'string|min:10',
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
            if(!is_array($this->thumbnail)){
                $image = $this->thumbnail->storeAs('public/projects/' . $this->project->id, 'thumbnail.png');
                $params['image'] = str_replace('public/', '', $image);
                
                $this->thumbnail = collect([
                    new SplFileObject(public_path('storage/' . $params['image']))
                ])->map(fn($file) => [
                    'name' => $file->getFilename(),
                    'extension' => $file->getExtension(),
                    'size' => $file->getSize(),
                    'path' => $file->getPath(),
                    'url' => asset('public/storage/' . $params['image'])
                ])->toArray();
            }

            if(isset($params['link'])){
                $params['link'] = 'http://' . $params['link'];
            }

            $this->project->update([
                ...$params
            ]);

            $this->toast()->success('Berhasil!', 'project berhasil di simpan')->send();
        } catch (\Throwable $th) {
            dd($th);
            $this->toast()->error('Error Occured', 'Terjadi error saat ingin save project, silahkan coba lagi.')->timeout(5)->send();
        }
    }
}
