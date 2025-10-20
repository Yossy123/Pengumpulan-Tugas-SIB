<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;


use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request) {
        // 1. Setup validator
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        // 2. Cek validator
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        // 3. Create user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        // 4. cek keberhasilan
        if ($user) {
            return response()->json([
                'success' => true,
                'message' => 'User registered successfully',
                'data' => $user
            ], 201);
        }
        // 5. cek gagal
        return response()->json([
            'success' => false, 
            'message' => 'User creation failed'
        ], 409); //Conflict
    }

    public function login(Request $request) {
        //1. Setup validator
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]); 
        //2. Cek validator
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        //3. cek kredensial dari request
        $credentials = $request->only('email', 'password');
        //4. Cek isFailed
        if (!$token = auth()->guard('api')->attempt($credentials)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid Email or Password',
            ], 401);
        }
        //5. Cek isSuccess
        return response()->json([
            'success' => true,
            'message' => 'Login successful',
            'user' => auth()->guard('api')->user(),
            'token' => $token,
        ], 200);
    }

    public function logout(Request $request) {
        //try
        //1. Invalidate token
        //2. Cek isSuccess

        //catch
        //1. Cek isFailed

        try {
            JWTAuth::invalidate(JWTAuth::getToken());

            return response()->json([
                'success' => true,
                'message' => 'logged out successfully'
            ], 200);
        
         } catch (JWTException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Logout Failed!'
            ], 500);

            }
     }

}   

