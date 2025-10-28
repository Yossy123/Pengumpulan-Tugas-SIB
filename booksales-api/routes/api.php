<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\TransactionController;

// AUTH ROUTES
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

// PUBLIC RESOURCE (INDEX, SHOW)
Route::apiResource('authors', AuthorController::class)->only(['index', 'show']);
Route::apiResource('genres', GenreController::class)->only(['index', 'show']);
Route::apiResource('books', BookController::class)->only(['index', 'show']);

// AUTH: USER (CUSTOMER/ADMIN)
Route::middleware(['auth:api'])->group(function () {
    Route::post('transactions', [TransactionController::class, 'store']);
    Route::get('transactions/{id}', [TransactionController::class, 'show']);
});

// AUTH: ADMIN ONLY
Route::middleware(['auth:api', 'role:admin'])->group(function () {
    // CRUD untuk admin
    Route::apiResource('authors', AuthorController::class)->only(['store', 'update', 'destroy']);
    Route::apiResource('books', BookController::class)->only(['store', 'update', 'destroy']);
    Route::apiResource('genres', GenreController::class)->only(['store', 'update', 'destroy']);

    // Transaksi index, update, destroy
    Route::get('transactions', [TransactionController::class, 'index']);
    Route::put('transactions/{id}', [TransactionController::class, 'update']);
    Route::delete('transactions/{id}', [TransactionController::class, 'destroy']);

    // Jika perlu support multipart update
    Route::post('authors/{id}', [AuthorController::class, 'update']);
    Route::post('books/{id}', [BookController::class, 'update']);
    Route::post('genres/{id}', [GenreController::class, 'update']);
});
