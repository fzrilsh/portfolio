<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'title',
        'image',
        'content',
        'status'
    ];
    public $timestamps = true;
}
