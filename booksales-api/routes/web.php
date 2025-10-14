<?php
use App\Http\Controllers\GenreController;
use App\Http\Controllers\AuthorController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/genre', [GenreController::class, 'index']);
Route::get('/author', [AuthorController::class, 'index']);







// Route::get('/books', function () {
//     return 'ini adalah Halaman Buku';
// });

// Route::get('/genres', function () {
//     return 'ini adalah Halaman Genre';
// });
