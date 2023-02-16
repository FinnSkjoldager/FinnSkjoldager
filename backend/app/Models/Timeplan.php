<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Timeplan extends Model
{
    use HasFactory;
    protected $table = 'timeplan';
    protected $fillable = 
    ['text','start','end'];
}
