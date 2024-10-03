<?php

use Livewire\Volt\Component;

new class extends Component
{
    
}; ?>

<div class="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r ">
    <div class="flex items-center justify-center h-14 border-b">
        <div>Admin Dashboard</div>
    </div>
    <div class="overflow-y-auto overflow-x-hidden flex-grow">
        <ul class="flex flex-col py-4 space-y-1">
            <li class="px-5">
                <div class="flex flex-row items-center h-8">
                    <div class="text-sm font-light tracking-wide text-gray-500">
                        Menu
                    </div>
                </div>
            </li>
            <li>
                <a href="{{ route('admin.dashboard') }}"
                    class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 hover:border-blue-400 {{ request()->routeIs('admin.dashboard') ? 'bg-gray-50 text-gray-800 border-blue-400' : 'text-gray-600 border-transparent' }} border-l-4 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                            </path>
                        </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="{{ route('admin.blogs') }}"
                    class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 hover:border-blue-400 {{ request()->routeIs('admin.blogs') ? 'bg-gray-50 text-gray-800 border-blue-400' : 'text-gray-600 border-transparent' }} border-l-4 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4">
                            </path>
                        </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Blog</span>
                </a>
            </li>
            <li>
                <a href="{{ route('admin.projects') }}"
                    class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 hover:border-blue-400 {{ request()->routeIs('admin.projects') ? 'bg-gray-50 text-gray-800 border-blue-400' : 'text-gray-600 border-transparent' }} border-l-4 pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                            </path>
                        </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Projects</span>
                </a>
            </li>
            <li>
                <a href="{{ route('admin.logout') }}"
                    class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 hover:text-gray-800 hover:border-blue-400 border-l-4 border-transparent pr-6">
                    <span class="inline-flex justify-center items-center ml-4">
                        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Logout</span>
                </a>
            </li>
        </ul>
    </div>
</div>