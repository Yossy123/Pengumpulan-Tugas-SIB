<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Genre;


class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Genre::create([
            'name' => 'Science Fiction',
            'description' => 'Fiction based on imagined future scientific or technological advances and major social or environmental changes.'
        ]);
        Genre::create([
            'name' => 'Fantasy',
            'description' => 'Fiction set in an imaginary universe, often involving magic, mythical beings, or supernatural elements.'
        ]);
        Genre::create([
            'name' => 'Mystery',
            'description' => 'Fiction dealing with the solution of a crime or the unraveling of secrets.'
        ]);
        Genre::create([
            'name' => 'Romance',
            'description' => 'Fiction centered around romantic relationships between characters.'
        ]);
        Genre::create([
            'name' => 'Horror',
            'description' => 'Fiction intended to scare, unsettle, or horrify the reader.'
        ]);
    }
}
