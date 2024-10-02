<?php

namespace App\Livewire\Admin;

use App\Models\Blog;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Livewire\Attributes\Layout;
use Livewire\Component;
use Livewire\WithFileUploads;
use SplFileObject;
use TallStackUi\Traits\Interactions;

#[Layout('layouts.admin')]
class EditBlog extends Component
{
    use WithFileUploads, Interactions;

    public ?Blog $blog;
    public $thumbnail;
    public $title = '';
    public $slug = '';
    public $content = '';
    public $status = 'draft';

    public function mount(string $id){
        $blog = Blog::query()->find($id);

        $this->blog = $blog;
        $this->title = $blog->title;
        $this->slug = $blog->slug;
        $this->content = $blog->content;
        $this->status = $blog->status;

        if($blog->image){
            $this->thumbnail = collect([
                new SplFileObject(public_path('storage/' . $blog->image))
            ])->map(fn($file) => [
                'name' => $file->getFilename(),
                'extension' => $file->getExtension(),
                'size' => $file->getSize(),
                'path' => $file->getPath(),
                'url' => asset('public/storage/' . $blog->image)
            ])->toArray();
        }
    }

    public function updatedTitle($value){
        $this->slug = str(str($value)->slug())->limit(50, '');;
    }

    public function deleteUpload($content){
        if(is_array($this->thumbnail)){
            $this->blog->image = '';
            $this->blog->save();
            $this->thumbnail = null;

            File::delete($content['path'] . '/' . $content['real_name']);
        }else{
            $this->thumbnail->delete();
        }
    }

    public function render()
    {
        return view('livewire.admin.edit-blog');
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
            if(!is_array($this->thumbnail)){
                $image = $this->thumbnail->storeAs('public/blogs/' . $this->slug, 'thumbnail.png');
                $params['image'] = str_replace('public/', '', $image);
                
                $this->thumbnail = collect([
                    new SplFileObject(public_path('storage/' . $image))
                ])->map(fn($file) => [
                    'name' => $file->getFilename(),
                    'extension' => $file->getExtension(),
                    'size' => $file->getSize(),
                    'path' => $file->getPath(),
                    'url' => asset('public/storage/' . $image)
                ])->toArray();
            }

            $this->blog->update($params);
            $this->toast()->success('Berhasil!', 'Blog berhasil di simpan' . ($this->status === 'publish' ? ' dan di publish' : ''))->send();
        } catch (\Throwable $th) {
            dd($th);
            $this->toast()->error('Error Occured', 'Terjadi error saat ingin save blog, silahkan coba lagi.')->timeout(5)->send();
        }
    }
}
