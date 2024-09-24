<main class="mb-32">
    <section class="mt-10 max-w-2xl mx-auto px-6">
        <h1 class="font-bold text-3xl mb-1">About</h1>
        <p class="opacity-60 mb-10">Some information about myself</p>
        <div class="mb-14">
            <p>I'm a passionate web developer and full-stack developer, who started programming out of curiosity and pushed myself all the way to the national level. I'm always on the lookout for new technologies and frameworks to stay ahead in the field.
                <br/><br/>Currently, I'm diving into the world of machine learning to expand my skill set even further. With a background in Computer Network Engineering, I've got a solid foundation in networking and technical problem-solving. Let's build something amazing together!</p>
        </div>
    </section>
    <section class="my-20 max-w-2xl mx-auto px-6 sm:flex sm:gap-10">
        <h2 class="mb-8 sm:mb-0 opacity-60">Achivements</h2>
        <div>
            <div class="mb-6">
                <p>I've joined a bunch of competitions, and here's what I ended up with!</p>
            </div>
            <div class="grid grid-cols-1 group">
                @foreach ($achivements as $achivement)
                <a href="{{ $achivement->link }}" class="py-3 flex items-center justify-between group-hover:opacity-60 hover:!opacity-100 transition-opacity">
                    <div class="flex items-center gap-4">
                        <img src="{{ asset('storage/' . $achivement->image) }}" alt="{{ $achivement->title }}" class="rounded-md w-[160px] h-[100px] object-cover" width="40" height="40" loading="lazy" decoding="async">
                        <div>
                            <h3 class="font-medium">{{ $achivement->title }}</h3>
                            <p class="text-sm opacity-60">{{ $achivement->description }}</p>
                        </div>
                    </div>
                    <p class="hidden sm:block text-xs sm:text-sm opacity-60">{{ date('d-m-Y', strtotime($achivement->date)) }}</p>
                </a>
                @endforeach
            </div>
        </div>
    </section>
    <section class="my-20 mt-32 max-w-2xl mx-auto px-6 sm:flex sm:gap-10">
        <h2 class="mb-8 sm:mb-0 opacity-60">Work</h2>
        <div>
            <div class="mb-6">
                <p>Work experience is super important, and here are the jobs I've been dedicated to!</p>
            </div>
            <div class="grid grid-cols-1 group"> 
                @foreach ($works as $work)
                <a href="{{ $work->link }}" target="_blank" class="py-3 flex items-center justify-between group-hover:opacity-60 hover:!opacity-100 transition-opacity">
                    <div class="flex items-center gap-4">
                        <div>
                            <h3 class="font-medium">{{ $work->as }}</h3>
                            <p class="text-sm opacity-60">{{ $work->company }}</p>
                        </div>
                    </div>
                    <p class="text-sm opacity-60">{{ $work->period }}</p>
                </a>
                @endforeach
            </div>
        </div>
    </section>
</main>