<?php
use App\Http\Controllers\GenreController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TransactionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



// Public: Siapa pun bisa read/list & show detail
Route::apiResource('authors', AuthorController::class)->only(['index', 'show']);
Route::apiResource('genres', GenreController::class)->only(['index', 'show']);
Route::apiResource('books', BookController::class)->only(['index', 'show']);

Route::apiResource('genres', GenreController::class);


// Auth routes: register, login, logout
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');

// Semua user yang sudah login (customer/admin) bisa akses index (list) dan show detail author:
Route::middleware(['auth:api'])->group(function () {

    Route::apiResource('transactions', TransactionController::class)->only(['index', 'store', 'show']);

    // Tambahkan untuk AUTHOR (READ ALL dan SHOW):


    // Group khusus admin:
    Route::middleware(['role:admin'])->group(function () {

        Route::apiResource('transactions', TransactionController::class)->only(['update', 'destroy']);

        // Tambahkan AUTHOR CRUD khusus admin:

    });
});
Route::apiResource('authors', AuthorController::class)->only(['store', 'update', 'destroy']);
Route::apiResource('books', BookController::class)->only(['store', 'update', 'destroy']);
Route::get('/genres', [GenreController::class, 'index']);
Route::apiResource('authors', AuthorController::class)->only(['index', 'show']);


Route::post('genres/{id}', [GenreController::class, 'update']);
Route::post('authors/{id}', [AuthorController::class, 'update']);
Route::post('books/{id}', [BookController::class, 'update']);
