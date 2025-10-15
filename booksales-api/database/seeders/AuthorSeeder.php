<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Author;


class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Author::create(['name'=>'J.K. Rowling', 'bio'=>'British author, Harry Potter']);
        Author::create(['name'=>'Haruki Murakami', 'bio'=>'Japanese author, Norwegian Wood']);
        Author::create(['name'=>'Tere Liye', 'bio'=>'Indonesian, Hafalan Shalat Delisa']);
        Author::create(['name'=>'George R.R. Martin', 'bio'=>'USA, Game of Thrones']);
        Author::create(['name'=>'Rick Riordan', 'bio'=>'US, Percy Jackson']);
    }
}
