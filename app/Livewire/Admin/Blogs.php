<?php

namespace App\Livewire\Admin;

use App\Models\Blog;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Storage;
use Livewire\Attributes\Layout;
use Livewire\Attributes\Title;
use Livewire\Component;
use TallStackUi\Traits\Interactions;

#[Layout('layouts.admin')]
#[Title('Blog Management')]
class Blogs extends Component
{
    use Interactions;

    public ?int $quantity = 10;
 
    public ?string $search = null;
 
    public function with(): array
    {
        return [
            'headers' => [
                ['index' => 'id', 'label' => '#'],
                ['index' => 'title', 'label' => 'Title'],
                ['index' => 'status', 'label' => 'Status'],
                ['index' => 'action']
            ],
            'rows' => Blog::query()
                ->when($this->search, function (Builder $query) {
                    return $query->where('title', 'like', "%{$this->search}%");
                })
                ->paginate($this->quantity)
                ->withQueryString()
        ];
    }

    public function render()
    {
        return view('livewire.admin.blogs', $this->with());
    }

    public function destroyBlog(string $id){
        $blog = Blog::query()->find($id);
        Storage::delete('public/' . $blog->image);
        $blog->delete();

        $this->toast()->success('Berhasil', 'blog berhasil dihapus.')->timeout(3)->send();
    }

    public function delete(string $id){
        $this->dialog()
            ->question('Warning!', 'Are you sure?')
            ->confirm(method: 'destroyBlog', params: $id)
            ->cancel()
            ->send();
    }
}
