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
        Author::create([
            'name'=>'J.K. Rowling', 
            'photo'=>'https://upload.wikimedia.org/wikipedia/commons/5/5d/J._K._Rowling_2010.jpg',
            'bio'=>'British author, Harry Potter']);
        Author::create([
            'name'=>'Haruki Murakami', 
            'photo'=>'https://upload.wikimedia.org/wikipedia/commons/9/9f/Haruki_Murakami_2016.jpg',
            'bio'=>'Japanese author, Norwegian Wood']);
        Author::create([
            'name'=>'Tere Liye', 
            'photo'=>'https://upload.wikimedia.org/wikipedia/commons/4/4f/Tere_Liye.jpg',
            'bio'=>'Indonesian, Hafalan Shalat Delisa']);
        Author::create([
            'name'=>'George R.R. Martin', 
            'photo'=>'https://upload.wikimedia.org/wikipedia/commons/0/0f/George_R._R._Martin%2C_2011.jpg',
            'bio'=>'USA, Game of Thrones']);
        Author::create([
            'name'=>'Rick Riordan', 
            'photo'=>'https://upload.wikimedia.org/wikipedia/commons/5/5f/Rick_Riordan_2016.jpg',
            'bio'=>'US, Percy Jackson']);
    }
}
