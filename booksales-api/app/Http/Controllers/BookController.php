<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
        public function index(){
        return response()->json(Book::with('author')->get(), 200);
    }
}
