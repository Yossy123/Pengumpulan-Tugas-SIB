<?php
use App\Http\Controllers\GenreController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



// Public: Siapa pun bisa read/list & show detail
Route::apiResource('authors', AuthorController::class)->only(['index', 'show']);
Route::apiResource('genres', GenreController::class)->only(['index', 'show']);
Route::apiResource('books', BookController::class)->only(['index', 'show']);

// Ini untuk login, register, logout
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');

// Khusus admin: CRUD / make-hapus data
Route::middleware(['auth:api', 'role:admin'])->group(function () {
    Route::apiResource('authors', AuthorController::class)->except(['index', 'show']);
    Route::apiResource('genres', GenreController::class)->except(['index', 'show']);
    Route::apiResource('books', BookController::class)->except(['index', 'show']);
});


Route::post('genres/{id}', [GenreController::class, 'update']);
Route::post('authors/{id}', [AuthorController::class, 'update']);
Route::post('books/{id}', [BookController::class, 'update']);
