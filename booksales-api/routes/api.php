<?php
use App\Http\Controllers\GenreController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/genres', [GenreController::class, 'index']);
Route::post('/genres', [GenreController::class, 'genre']);






Route::get('/authors', [AuthorController::class, 'index']);
Route::post('/authors', [AuthorController::class, 'author']);





Route::get('/books', [BookController::class, 'index']);
Route::post('/books', [BookController::class, 'store']);