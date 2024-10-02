<div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6 bg-white border-b border-gray-200">
                <div class="mb-4">
                    <x-upload wire:model.live="thumbnail" accept='.jpeg, .jpg, .png, .webp' label="Thumbnail" tip="Drag and drop your thumbnail here" delete />
                </div>

                <div class="mb-4">
                    <x-input label="Title *" wire:model.live="title" />
                </div>

                <div class="mb-4">
                    <x-input :prefix="str(config('app.url'))->after('//') .'/blog/'" label="Slug" wire:model.live="slug"
                        readonly />
                </div>

                <div class="mb-4">
                    <livewire:quill-text-editor wire:model="content" theme="snow" placeholder="Tulis blog mu..." />
                </div>

                <div class="mb-2 flex">
                    <x-select.native wire:model="status" label="Status"
                        :options="[['label' => 'Publish', 'value' => 'publish'], ['label' => 'Draft', 'value' => 'draft']]"
                        select='label:label|value:value' />
                    {{-- <button type="submit" class="p-3 bg-blue-500 text-white hover:bg-blue-400">Submit</button> --}}
                </div>
                <x-button wire:click="save" loading="save" color="blue">
                    Submit
                </x-button>
            </div>
        </div>
    </div>

    <x-toast />
</div>

@push('scripts')
<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/quill@2.0.0-rc.5/dist/quill.snow.css" rel="stylesheet" />
<script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
@endpush