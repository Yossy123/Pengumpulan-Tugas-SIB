<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transaction;
use App\Models\Book;
use Illuminate\Support\Facades\Validator;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = Transaction::with(['user', 'book'])->get();

        if ($transactions->isEmpty()) {
            return response()->json([
                'success' => true,
                'message' => 'No transactions found.'
            ], 200);
        }
        return response()->json([
            'success' => true,
            'message' => 'Transactions retrieved successfully.',
            'data' => $transactions
        ]);
    }

    public function store(Request $request) {
        //1. validator & cek validator
        $validator = Validator::make($request->all(), [
            'book_id' => 'required|exists:books,id',
            'quantity' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation error.',
                'errors' => $validator->errors()
            ], 422);
        }
        //2. generate orderNumber -> unique | ORD-0003
        $uniqueCode = "ORD-" . strtoupper(uniqid());

        //3. ambil user yang sedang login & cek login (apakah ada data user?)
        $user = auth('api')->user();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized. Please log in.'
            ], 401);
        }
        //4. mencari data buku dari request
        $book = Book::find($request->book_id);

        //5. cek stok buku
        if ($book->stock < $request->quantity) {
            return response()->json([
                'success' => false,
                'message' => 'Insufficient stock for the requested book.'
            ], 400);
        }
        //6. hitung total harga = price * quantity
        $totalAmount = $book->price * $request->quantity;
        //7. kurangi stok buku (update)
        $book->stock -= $request->quantity;
        $book->save();

        //8. simpan data transaksi
        $transaction = Transaction::create([
            'order_number' => $uniqueCode,
            'customer_id' => $user->id,
            'book_id' => $request->book_id,
            'total_amount' => $totalAmount,
        ]);
        return response()->json([
            'success' => true,
            'message' => 'Transaction created successfully.',
            'data' => $transaction
        ], 201);
    }
}
