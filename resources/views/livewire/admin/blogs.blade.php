<div>
    <x-button href="{{ route('admin.blogs.create') }}" text="Add New" color="blue" class="mb-4"></x-button>
    <x-table :$headers :$rows filter loading>
        @interact('column_action', $row)
            <x-button.circle href="{{ route('admin.blogs.edit', ['id' => $row->id]) }}" icon='pencil' color='green'></x-button.circle>
            <x-button.circle icon='trash' color='red' wire:click='delete({{$row->id}})'></x-button.circle>
        @endinteract
    </x-table>

    <x-dialog />
    <x-toast />
</div>