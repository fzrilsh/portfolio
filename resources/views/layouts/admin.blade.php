<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/png" href="{{ asset('public/images/logo.png') }}">
    <meta name="generator" content="fzrilsh_">
    <title>{{ $title ?? 'Fazril Syaveral Hillaby' }}</title>
    <meta name="description" content="Building dynamic backend system enjoyer. Focused on developing intuitive experiences that constantly grow and improve based on server side. Casual and proficient in communication.">
    <meta property="og:title" content="Fazril Syaveral Hillaby">
    <meta property="og:description" content="Building dynamic backend system enjoyer. Focused on developing intuitive experiences that constantly grow and improve based on server side. Casual and proficient in communication.">
    <meta property="og:image" content="{{ asset('public/images/logo.png') }}">

    <tallstackui:script />
    @livewireStyles

    @if (env('APP_ENV') === 'local')
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @else
    <link rel="stylesheet" href="{{ asset('public/build/assets/app.css') }}">
    <script src="{{ asset('public/build/assets/app.js') }}"></script>
    @endif
</head>

<body>
    <div class="min-h-screen flex flex-row flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
        <div class="min-h-screen flex flex-row flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
            <header>
                <livewire:layout.admin.navbar />
            </header>

            <div class="ml-72 mt-10 w-2/3">
                {{ $slot }}
            </div>
        </div>
    </div>

    <footer></footer>
    @stack('scripts')
    @livewireScripts
</body>

</html>
