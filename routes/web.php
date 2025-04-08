<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'login')->name('login');
Route::post('/auth/login',action: [\App\Http\Controllers\Auth\Login::class,'logion'])->name(name:'auth.login');