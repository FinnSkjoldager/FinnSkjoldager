<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medlem extends Model
{
    use HasFactory;
    protected $table = 'medlem';
    protected $fillable = 
    ['fornavn','efternavn','telefonnr'];
}