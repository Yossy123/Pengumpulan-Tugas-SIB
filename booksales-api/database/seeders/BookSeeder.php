<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Book::create([
            'title'=>'Harry Potter and the Philosopher\'s Stone', 
            'description'=>'First book in the Harry Potter series',
            'price'=>19.99,
            'stock'=>10,
            'cover_photo'=>'harry_potter_1.jpg',
            'genre_id'=>1,
            'author_id'=>1
        ]);
        Book::create([
            'title'=>'Norwegian Wood', 
            'description'=>'A nostalgic story of loss and sexuality',
            'price'=>15.99,
            'stock'=>5,
            'cover_photo'=>'norwegian_wood.jpg',
            'genre_id'=>2,
            'author_id'=>2
        ]);
        Book::create([
            'title'=>'Hafalan Shalat Delisa', 
            'description'=>'A touching story set against the backdrop of the 2004 tsunami',
            'price'=>12.99,
            'stock'=>8,
            'cover_photo'=>'hafalan_shalat_delisa.jpg',
            'genre_id'=>3,
            'author_id'=>3
        ]);
        Book::create([
            'title'=>'A Game of Thrones', 
            'description'=>'The first book in A Song of Ice and Fire series',
            'price'=>22.99,
            'stock'=>7,
            'cover_photo'=>'game_of_thrones.jpg',
            'genre_id'=>4,
            'author_id'=>4
        ]);
        Book::create([
            'title'=>'The Lightning Thief', 
            'description'=>'The first book in the Percy Jackson & the Olympians series',
            'price'=>14.99,
            'stock'=>12,
            'cover_photo'=>'lightning_thief.jpg',
            'genre_id'=>5,
            'author_id'=>5
        ]);
    }
}
