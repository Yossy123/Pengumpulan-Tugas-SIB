<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Author;

class AuthorController extends Controller
{
    public function index() {
        $authors = Author::all();

         if ($authors->isEmpty()) {
            return response()->json([
                "success" => true,
                "message" => "Resource data not found"

            ], 200);
        }

       return response()->json([
        "success" => true,
        "message" => "Get all resources",
        "data" => $authors
       ], 200);
    }
}
