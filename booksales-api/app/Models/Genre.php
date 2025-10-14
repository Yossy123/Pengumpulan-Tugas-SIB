<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    public static function getAll() {
        return [
            ['id'=>1, 'name'=>'Action'],
            ['id'=>2, 'name'=>'Adventure'],
            ['id'=>3, 'name'=>'Romance'],
            ['id'=>4, 'name'=>'Comedy'],
            ['id'=>5, 'name'=>'Fantasy'],
        ];
    }

}