<main class="mb-32">
    <section class="mt-10 max-w-2xl mx-auto px-6">
        <h1 class="font-bold text-3xl mb-1">Projects</h1>
        <p class="opacity-60 mb-10">I’ve worked with a variety of technologies and tools to build cool things. Here are some of the projects I’ve worked on.</p>
        <div class="grid grid-cols-1 group">
            @foreach ($projects as $project)
            <a href="{{ $project->link }}" target="_blank" class="sm:py-5 py-10 flex flex-col sm:flex-row gap-6 group-hover:opacity-60 hover:!opacity-100 transition-opacity">
                <div class="h-full bg-gray-700 rounded-lg aspect-video sm:h-[150px]"> 
                    <img src="{{ assset('storage/' . $project->image) }}" alt="{{ $project->title }}" class="w-full h-full object-cover rounded-lg aspect-video" width="1920" height="1080" loading="lazy" decoding="async">
                </div>
                <div>
                    <div class="flex items-center gap-1 mb-2">
                        <h2 class="font-medium">{{ $project->title }}</h2> <span class="opacity-60">· {{ date('Y', strtotime($project->created_at)) }}</span>
                    </div>
                    <div class="opacity-60">
                        <p>{{ $project->description }}</p>
                    </div>
                </div>
            </a>
            @endforeach
        </div>
    </section>
</main>