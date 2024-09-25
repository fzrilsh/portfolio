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

    <link rel="stylesheet" href="{{ asset('public/build/assets/app.css') }}">
    <script src="{{ asset('public/build/assets/app.js') }}"></script>
</head>

<body>
    <header>
        <livewire:layout.navbar />
    </header>

    {{ $slot }}

    <footer></footer>
    @livewireScripts
    @stack('scripts')
</body>

</html>
