<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Author;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

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

   public function store(Request $request)
{
    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:100',
        'photo' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
        'bio' => 'required|string',
    ]);
    if ($validator->fails()) {
        return response()->json([
            'success' => false,
            'message' => $validator->errors()
        ], 422);
    }

    $imageName = null;
    if ($request->hasFile('photo')) {
        $image = $request->file('photo');
        $image->store('authors', 'public');
        $imageName = $image->hashName();
    }

    $author = Author::create([
        'name' => $request->name,
        'photo' => $imageName,
        'bio' => $request->bio,
    ]);

    return response()->json([
        'success' => true,
        'message' => 'Resource created successfully',
        'data' => $author
    ], 201);
}



public function show($id)
{
    $author = Author::find($id);
    if (!$author) {
        return response()->json([
            'success' => false,
            'message' => 'Author not found'
        ], 404);
    }
    return response()->json([
        'success' => true,
        'data' => $author
    ], 200);
}





public function update(Request $request, $id)
{
    $author = Author::find($id);
    if (!$author) {
        return response()->json([
            'success' => false,
            'message' => 'Author not found'
        ], 404);
    }

    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:100',
        'bio' => 'required|string',
         'photo' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
    ]);

    if ($validator->fails()) {
        return response()->json([
            'success' => false,
            'message' => $validator->errors()
        ], 422);
    }

    $data = [
        'name' => $request->name,
        'bio' => $request->bio,
        'photo' => $request->photo,
    ];

    if ($request->hasFile('photo')) {
        $image = $request->file('photo');
        $image->store('authors', 'public');
        // Hapus foto lama (jika ada)
        if ($author->photo) {
            Storage::disk('public')->delete('authors/' . $author->photo);
        }
        $data['photo'] = $image->hashName();
    }

    $author->update($data);

    return response()->json([
        'success' => true,
        'message' => 'Author updated successfully',
        'data' => $author
    ], 200);


    $input = $request->all();

    $input = $request->only(['name','bio','photo']);

}



   public function destroy($id)
{
    $author = Author::find($id);
    if (!$author) {
        return response()->json([
            'success' => false,
            'message' => 'Author not found'
        ], 404);
    }

    // Hapus file foto (jika ada)
    if ($author->photo) {
        Storage::disk('public')->delete('authors/' . $author->photo);
    }

    $author->delete();
    return response()->json([
        'success' => true,
        'message' => 'Author deleted successfully'
    ], 200);
}


}
