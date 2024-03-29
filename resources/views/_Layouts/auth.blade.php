<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite(['resources/js/app.js'])

    <title>@yield('title', env('APP_NAME'))</title>
</head>
<body class="antialiased">
<div id="app">
    @if(session()->has('message'))
        {{ session('message') }}
    @endif
    <main class="md:min-h-screen md:flex md:items-center md:justify-center py-16 lg:py-20">
        <div class="container">

            <!-- Page heading -->
            <div class="text-center">
                <a href="{{ route('home') }}" class="inline-block" rel="home">
                    <img src="{{ Vite::image('logo.svg') }}" class="w-[148px] md:w-[201px] h-[36px] md:h-[50px]" alt="CutCode">
                </a>
            </div>

            @yield('content')
        </div>
    </main>
</div>
</body>
</html>
