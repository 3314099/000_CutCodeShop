<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/test', function () {
    //    logger()->channel('telegram')->debug('Hello Debug');
    return view('test/test');
});

Route::controller(AuthController::class)->group(function (){
    Route::get('/login', 'index')->name('login');
    Route::get('/sign-up', 'signUp')->name('signUp');

    Route::post('/login', 'signIn')->name('signIn');
    Route::post('/sign-up', 'store')->name('store');

    Route::delete('/logout', 'logout')->name('logOut');

    Route::get('/forgot-password', 'forgot')
        ->middleware('guest')
        ->name('password.request');

    Route::post('/forgot-password', 'forgotPassword')
        ->middleware('guest')
        ->name('password.email');

    Route::get('/reset-password/{token}', 'reset')
        ->middleware('guest')
        ->name('password.reset');

    Route::post('/reset-password', 'resetPassword')
        ->middleware('guest')
        ->name('password.update');

});

Route::get('/', HomeController::class)->name('home');
