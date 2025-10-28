<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\TransactionController;

// ==========================
// 1. AUTHENTICATION ROUTES
// ==========================
//
// Register, login, logout, user info

Route::post('/register', [AuthController::class, 'register']); // Register akun baru
Route::post('/login', [AuthController::class, 'login']);       // Login
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api'); // Logout (wajib login)

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// ===========================================
// 2. PUBLIC (GUEST/SEMUA ORANG BISA AKSES)
// ===========================================

Route::apiResource('authors', AuthorController::class)->only(['index', 'show']);
Route::apiResource('genres', GenreController::class)->only(['index', 'show']);
Route::apiResource('books', BookController::class)->only(['index', 'show']);


// ========================
// 3. AUTHENTICATED (USER LOGGED IN: ADMIN & CUSTOMER)
// ========================
Route::middleware(['auth:api'])->group(function () {

    // Transaksi list, tambah transaksi, detail transaksi
    // Route::apiResource('transactions', TransactionController::class)->only(['index', 'store', 'show']);
    Route::post('transactions', [TransactionController::class, 'store']);
    Route::get('transactions/{id}', [TransactionController::class, 'show']);

    // (TAMBAHKAN JIKA PERLU: akses khusus author detail/data oleh user login)
    // Route::apiResource('authors', AuthorController::class)->only(['index', 'show']);

    // =============================
    // 4. ADMIN-ONLY (hak akses role:admin)
    // =============================
    Route::middleware(['role:admin'])->group(function () {

        // CRUD penuh untuk Author, Book, Genre khusus admin
        Route::apiResource('authors', AuthorController::class)->only(['store', 'update', 'destroy']);
        Route::apiResource('books', BookController::class)->only(['store', 'update', 'destroy']);
        Route::apiResource('genres', GenreController::class)->only(['store', 'update', 'destroy']);

        // Khusus transaksi: admin saja yang bisa update & delete transaksi
        // Route::apiResource('transactions', TransactionController::class)->only(['update', 'destroy']);
        Route::get('transactions', [TransactionController::class, 'index']);
        Route::put('transactions/{id}', [TransactionController::class, 'update']);
        Route::delete('transactions/{id}', [TransactionController::class, 'destroy']);

        // Jika ingin lebih spesifik update pakai POST pada ID (untuk FormData)
        Route::post('authors/{id}', [AuthorController::class, 'update']);
        Route::post('books/{id}', [BookController::class, 'update']);
        Route::post('genres/{id}', [GenreController::class, 'update']);
    });
});
