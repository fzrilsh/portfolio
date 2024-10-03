<?php

namespace App\Livewire\Admin;

use App\Models\Blog;
use Livewire\Attributes\Layout;
use Livewire\Component;
use Livewire\WithFileUploads;
use TallStackUi\Traits\Interactions;

#[Layout('layouts.admin')]
class CreateBlog extends Component
{
    use WithFileUploads, Interactions;

    public $thumbnail;
    public $title = '';
    public $slug = '';
    public $content = '';
    public $status = 'draft';

    public function updatedTitle($value){
        $this->slug = str(str($value)->slug())->limit(50, '');;
    }

    public function deleteUpload(){
        if($this->thumbnail){
            $this->thumbnail->delete();
            $this->thumbnail = null;
        }
    }

    public function render()
    {
        return view('livewire.admin.create-blog');
    }

    public function rules(){
        return [
            'thumbnail' => 'required',
            'title' => 'required|min:5',
            'content' => 'required|min:10',
            'status' => 'required|in:draft,publish',
            'slug' => 'required'
        ];
    }

    public function save(){
        $params = $this->validate();

        try {
            $image = $this->thumbnail->storeAs('public/blogs/' . $this->slug, 'thumbnail.png');
            $image = str_replace('public/', '', $image);

            $blog = Blog::query()->create([
                ...$params,
                'image' => $image
            ]);

            $this->toast()->success('Berhasil!', 'Blog berhasil di simpan' . ($this->status === 'publish' ? ' dan di publish' : ''))->flash()->send();
            return redirect()->route('admin.blogs.edit', ['id' => $blog->id]);
        } catch (\Throwable $th) {
            dd($th);
            $this->toast()->error('Error Occured', 'Terjadi error saat ingin save blog, silahkan coba lagi.')->timeout(5)->send();
        }
    }
}
