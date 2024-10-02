<main class="mb-32">
    <section class="mt-10 max-w-2xl mx-auto px-6">
        <h1 class="font-bold text-3xl mb-4">{{ $blog->title }}</h1>
        <div class="flex gap-4 mb-6">
            <img src="{{ asset('public/images/pas.jpg') }}" alt="Tim Witzdam" class="w-[50px] aspect-square object-cover rounded-full" loading="lazy" decoding="async">
            <div>
                <p class="font-medium">Admin#123</p>
                <p class="opacity-60"> {{ date('d/m/Y', strtotime($blog->created_at)) }} · {{ round(count(explode(' ', $blog->content)) / 250) }} min read </p>
            </div>
        </div> 
        <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue format-invert">
            {!! $blog->content !!}
        </article>
    </section>
</main>

@push('scripts')
    <script>
        document.title = '{{ $blog->title }}'
    </script>
@endpush