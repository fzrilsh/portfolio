<div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6 bg-white border-b border-gray-200">
                <div class="mb-4">
                    @if (is_array($thumbnail))
                    <x-upload wire:model.live="thumbnail" static accept='.jpeg, .jpg, .png, .webp' label="Thumbnail" tip="Drag and drop your thumbnail here" delete />
                    @else
                    <x-upload wire:model.live="thumbnail" accept='.jpeg, .jpg, .png, .webp' label="Thumbnail" tip="Drag and drop your thumbnail here" delete />
                    @endif
                </div>

                <div class="mb-4">
                    <x-input label="Title *" wire:model.live="title" />
                </div>

                <div class="mb-4">
                    <x-input prefix="https://" label="Link" wire:model.lazy="link" />
                </div>

                <div class="mb-4">
                    <x-textarea maxlength="200" label="Description" wire:model="description" count />
                </div>

                <x-button wire:click="save" loading="save" color="blue">
                    Submit
                </x-button>
            </div>
        </div>
    </div>

    <x-toast />
</div>