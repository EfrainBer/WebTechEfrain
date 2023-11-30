<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Portatiles extends Model
{
    use HasFactory;
    protected $fillable = ['NombrePor', 'price', 'stock'];
}