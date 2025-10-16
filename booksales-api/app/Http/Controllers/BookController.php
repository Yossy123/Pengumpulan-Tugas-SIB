<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
        public function index(){
        $books = Book::all();

        if ($books->isEmpty()) {
            return response()->json([
                "success" => true,
                "message" => "Resource data not found"

            ], 200);
        }

        return response()->json([
            "success" => true,
            "message" => "Get all resources",
            "data" => $books
        ], 200);
    }
}
