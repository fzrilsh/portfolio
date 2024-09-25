<main class="mb-32">
    <section class="mt-10 max-w-2xl mx-auto px-6">
        <h1 class="font-bold text-3xl mb-1">Blog</h1>
        <p class="opacity-60 mb-14">Thoughts, stories and ideas.</p>
        <div class="grid grid-cols-1 gap-10 sm:gap-6 mb-10"> 
            @foreach ($blogs as $blog)
            <a href="/blogs/{{ $blog->slug }}" class=" sm:flex sm:flex-row-reverse sm:justify-between sm:gap-6 post"> 
                <img src="{{ asset('public/storage/' . $blog->image) }}" alt="{{ $blog->title }}" class="rounded-lg w-[100px] h-[100px] object-cover" width="100" height="100" loading="lazy" decoding="async">
                <div class="mt-4 sm:my-auto">
                    <p class="opacity-60 mb-2"> {{ date('d/m/Y', strtotime($blog->created_at)) }} · {{ round(count(explode(' ', $blog->content)) / 250) }} min read </p>
                    <h3 class="font-medium hover-underline">{{ $blog->title }}</h3>
                </div>
            </a>
            @endforeach
        </div>
    </section>
</main>