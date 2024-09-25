<?php

use App\Livewire\Actions\Logout;
use Livewire\Volt\Component;

new class extends Component
{
    
}; ?>

<div class="px-6 py-6 max-w-2xl mx-auto flex items-center justify-between"> <a href="/"> <img src="{{ asset('public/images/logo.png') }}" alt="Logo" class="w-[50px] h-[50px] object-cover" width="50" height="50" loading="lazy" decoding="async"> </a>
    <nav class="ml-auto mr-6 sm:m-0">
        <ul class="hidden sm:flex sm:items-center sm:gap-2">
            <li> <a class="group px-4 py-2 rounded-lg {{ request()->routeIs('home') ? 'bg-gray-bg opacity-100' : 'opacity-60' }} hover:bg-gray-bg hover:opacity-100 transition-all" href="/"> Home </a> </li>
            <li> <a class="group px-4 py-2 rounded-lg {{ request()->routeIs('about') ? 'bg-gray-bg opacity-100' : 'opacity-60' }} hover:bg-gray-bg hover:opacity-100 transition-all" href="/about"> About </a> </li>
            <li> <a class="group px-4 py-2 rounded-lg {{ request()->routeIs('projects') ? 'bg-gray-bg opacity-100' : 'opacity-60' }} hover:bg-gray-bg hover:opacity-100 transition-all" href="/projects"> Projects </a> </li>
            <li> <a class="group px-4 py-2 rounded-lg {{ request()->routeIs('blogs') ? 'bg-gray-bg opacity-100' : 'opacity-60' }} hover:bg-gray-bg hover:opacity-100 transition-all" href="/blogs"> Blog </a> </li>
        </ul>
        <div class="relative sm:hidden">
            <button id="link-menu-button" class="relative font-medium opacity-60 p-4">Menu <span id="open-indicator">+</span></button>
            <div id="link-menu" class="absolute p-2 right-0 bg-gray-600 rounded-lg w-44 transition-opacity ease-in-out duration-300 opacity-0 z-40">
                <ul class="text-white">
                    <li> <a class="block pl-4 py-3" href="/"> Home </a> </li>
                    <li> <a class="block pl-4 py-3" href="/about"> About </a> </li>
                    <li> <a class="block pl-4 py-3" href="/projects"> Projects </a> </li>
                    <li> <a class="block pl-4 py-3" href="/blogs"> Blog </a> </li>
                </ul>
            </div>
        </div>
    </nav>
    <div>
        <a href="mailto:hai@fazrilsh.my.id" class="block p-2 opacity-60 hover:opacity-100 transition-opacity" aria-label="Email">
            <svg width="20" height="20" class="text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        </a>
    </div>
</div>

@push('scripts')
<script>
    const e=document.getElementById("link-menu-button"),
    n=document.getElementById("link-menu"),
    i=document.getElementById("open-indicator");
    
    e.addEventListener("click",()=>{
        n.classList.contains("opacity-0") ? (n.classList.remove("pointer-events-none"),n.classList.remove("opacity-0"),i.innerText="-") : (n.classList.add("pointer-events-none"),n.classList.add("opacity-0"),i.innerText="+")
    });
    document.addEventListener("click",t=>{const s=t.target===e||e.contains(t.target),c=t.target===n||n.contains(t.target);!s&&!c&&(n.classList.add("pointer-events-none"),n.classList.add("opacity-0"),i.innerText="+")});
</script>
@endpush