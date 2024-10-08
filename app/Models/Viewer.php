<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Viewer extends Model
{
    use HasFactory;

    public $timestamps = true;
    protected $fillable = [
        'ip',
        'user-agent'
    ];
}
