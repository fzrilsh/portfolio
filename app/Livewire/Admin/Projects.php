<?php

namespace App\Livewire\Admin;

use App\Models\Project;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Storage;
use Livewire\Attributes\Layout;
use Livewire\Attributes\Title;
use Livewire\Component;
use TallStackUi\Traits\Interactions;

#[Layout('layouts.admin')]
#[Title('Project Management')]
class Projects extends Component
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
                ['index' => 'action']
            ],
            'rows' => Project::query()
                ->when($this->search, function (Builder $query) {
                    return $query
                        ->where('title', 'like', "%{$this->search}%")
                        ->where('description', 'like', "%{$this->search}%");
                })
                ->paginate($this->quantity)
                ->withQueryString()
        ];
    }

    public function render()
    {
        return view('livewire.admin.projects', $this->with());
    }

    public function destroyProject(string $id){
        $project = Project::query()->find($id);
        Storage::delete('public/' . $project->image);
        $project->delete();

        $this->toast()->success('Berhasil', 'project berhasil dihapus.')->timeout(3)->send();
    }

    public function delete(string $id){
        $this->dialog()
            ->question('Warning!', 'Are you sure?')
            ->confirm(method: 'destroyProject', params: $id)
            ->cancel()
            ->send();
    }
}
