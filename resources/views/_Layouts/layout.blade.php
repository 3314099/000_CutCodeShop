<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite('resources/js/app.js')

    <title>{{ env('APP_NAME')}}</title>
</head>
<body class="antialiased">
    <div id="app">
        <component-main title="I'm main.vue props1"></component-main>
        @yield('content')
    </div>
</body>
</html>
