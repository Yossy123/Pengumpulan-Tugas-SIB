<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    public static function getAll() {
        return [
            ['id'=>1, 'name'=>'J.K. Rowling'],
            ['id'=>2, 'name'=>'Haruki Murakami'],
            ['id'=>3, 'name'=>'Tere Liye'],
            ['id'=>4, 'name'=>'George R.R. Martin'],
            ['id'=>5, 'name'=>'Rick Riordan'],
        ];
    }
}
