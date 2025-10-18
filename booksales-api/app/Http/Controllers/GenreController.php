<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Genre;
use Illuminate\Support\Facades\Validator;

class GenreController extends Controller
{
    public function index() {
        $genres = Genre::all();

         if ($genres->isEmpty()) {
            return response()->json([
                "success" => true,
                "message" => "Resource data not found"

            ], 200);
        }

       return response()->json([
        "success" => true,
        "message" => "Get all resources",
        "data" => $genres
       ], 200);
    }


   public function store(Request $request)
{
    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:100',
        'description' => 'nullable|string',
    ]);

    if ($validator->fails()) {
        return response()->json([
            'success' => false,
            'message' => $validator->errors()
        ], 422);
    }

    $genre = Genre::create([
        'name' => $request->name,
        'description' => $request->description,
    ]);

    return response()->json([
        'success' => true,
        'message' => 'Genre created successfully',
        'data' => $genre
    ], 201);
}



    public function show(string $id) {
    $genre = Genre::find($id);

    if(!$genre) {
        return response()->json([
            'success' => false,
            'message' => 'Resources not found'
        ], 404);
    }


    return response()->json([
        'success' => true,
        'message' => 'Get detail resources',
        'data' => $genre
    ], 200);
}


    public function update(string $id, Request $request) {
        //1.mencari data
        $genre = Genre::find($id);


        if (!$genre) {
            return response()->json([
                'success' => false,
                'message' => 'Resourcess not found'
            ], 404);
        }
        //2.validator
         $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'description' => 'required|string',

        ]);

        if($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()
            ], 422);
        }
        //3.siapkan data yang ingin di update
        $data = [
            'name' => $request->name,
            'description' => $request->description,
        ];
    
        //4.update data baru ke database

        $genre->update($data);

        return response()->json([
            'success' => true,
            'message' => 'Resource update successfully',
            'data' => $genre
        ], 200);
    }


    public function destroy(string $id) {
        $genre = Genre::find($id);

        if(!$genre) {
        return response()->json([
            'success' => false,
            'message' => 'Resources not found'
        ], 404);
    }


        $genre->delete();

        return response()->json ([
            'success' => true,
            'message' => 'Delete reso
            urces successfully'
        ]);
    }


    

}
