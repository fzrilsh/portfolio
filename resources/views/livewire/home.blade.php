<main class="mb-32">
    <section class="mt-10 max-w-2xl mx-auto px-6">
        <h1 class="font-bold text-3xl mb-1">Fazril Syaveral Hillaby</h1>
        <p class="opacity-60 mb-10">Student &amp; Web Developer</p>
        <div class="flex flex-row gap-6 mb-8">
            <img src="https://media.licdn.com/dms/image/v2/D5603AQFId_7gd_ua0A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1714835080375?e=1732752000&v=beta&t=4chwEUAhf6Eb36sHtBbtWpZZ8GvuA6zQC4SAf3MhpLM" alt="Fazril Syaveral Hillaby" class="rounded-full" width="100" height="100" loading="lazy" decoding="async">
            <div class="group flex flex-col justify-center gap-2 w-fit"> 
                <a href="https://github.com/fzrilsh" class="flex items-center gap-3 opacity-60 group-hover:opacity-30 hover:!opacity-60 transition-opacity" target="_blank">
                    <svg width="25" height="25" class="text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    <div>
                        <p>GitHub</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/fazrilsyaveralhillaby/" class="flex items-center gap-3 opacity-60 group-hover:opacity-30 hover:!opacity-60 transition-opacity" target="_self">
                    <svg width="25" height="25" class="text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                    </svg>
                    <div>
                        <p>Linkedin</p>
                    </div>
                </a>
                <a href="https://www.instagram.com/fzrilsh_" class="flex items-center gap-3 opacity-60 group-hover:opacity-30 hover:!opacity-60 transition-opacity" target="_self">
                    <svg width="25" height="25" class="text-black" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
                    <div>
                        <p>Instagram</p>
                    </div>
                </a>
            </div>
        </div>
        <p class="max-w-md mb-8"> I&#39;m Fazril Syaveral Hillaby, building dynamic backend system enjoyer. Focused on developing intuitive experiences that constantly grow and improve based on server side. Casual and proficient in communication. </p>
        <div class="flex items-center gap-4 group w-fit">
            <a href="/projects" target="_self" class="flex items-center gap-2 opacity-60 group-hover:opacity-30 hover:!opacity-60 transition-opacity">
                <div class="rotate-45">
                    <svg width="1em" height="1em" viewBox="0 0 24 24" data-icon="mdi:arrow-up">
                        <symbol id="ai:mdi:arrow-up">
                            <path fill="currentColor" d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8z" />
                        </symbol>
                        <use xlink:href="#ai:mdi:arrow-up"></use>
                    </svg>
                </div>
                <span>My Projects</span>
            </a>
            <a href="/about" target="_self" class="flex items-center gap-2 opacity-60 group-hover:opacity-30 hover:!opacity-60 transition-opacity">
                <div class="rotate-45"><svg width="1em" height="1em" viewBox="0 0 24 24" data-icon="mdi:arrow-up">
                        <use xlink:href="#ai:mdi:arrow-up"></use>
                    </svg>
                </div>
                <span>About Me</span>
            </a>
        </div>
    </section>
    @if ($blogs->count())
    <section class="mt-20 max-w-2xl mx-auto px-6">
        <h2 class="mb-8">Latest Posts</h2>
        <div class="grid grid-cols-1 gap-10 sm:gap-6 mb-10">
            @foreach ($blogs as $blog)
            <a href="/blogs/{{ $blog->slug }}" class=" sm:flex sm:flex-row-reverse sm:justify-between sm:gap-6 post">
                <img src="{{ asset('public/storage/' . $blog->image) }}" alt="{{ $blog->title }}" class="rounded-lg w-[100px] h-[100px] object-cover" loading="lazy" decoding="async">
                <div class="mt-4 sm:my-auto">
                    <p class="opacity-60 mb-2"> {{ date('d/m/Y', strtotime($blog->created_at)) }} </p>
                    <h3 class="font-medium hover-underline">{{ $blog->title }}</h3>
                </div>
            </a>
            @endforeach
        </div>
        <div class="text-center"> 
            <a href="/blogs" class="underline underline-offset-4 opacity-60 hover:opacity-100 transition-opacity">View all</a>
        </div>
    </section>
    @endif
</main>