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
        Book::create(['title'=>'Harry Potter', 'author_id'=>1, 'genre'=>'Fantasy', 'year'=>1997]);
        Book::create(['title'=>'Norwegian Wood', 'author_id'=>2, 'genre'=>'Drama', 'year'=>1987]);
        Book::create(['title'=>'Hafalan Shalat Delisa', 'author_id'=>3, 'genre'=>'Drama', 'year'=>2005]);
        Book::create(['title'=>'A Game of Thrones', 'author_id'=>4, 'genre'=>'Fantasy', 'year'=>1996]);
        Book::create(['title'=>'Percy Jackson', 'author_id'=>5, 'genre'=>'Fantasy', 'year'=>2005]);
    }
}
