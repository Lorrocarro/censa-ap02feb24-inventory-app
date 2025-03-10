<?php
 use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Login'); // Asegúrate de que Login.jsx está en la carpeta correcta
})->name('login');

// Ruta para procesar el formulario de login
Route::post('/login', [AuthController::class, 'login'])->name('login.process');

// Ruta para cerrar sesión
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

