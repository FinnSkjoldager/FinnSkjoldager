<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jobsearch extends Model
{
    use HasFactory;
    protected $table = 'jobsearch';
    protected $fillable = ['search','title','desc','company','url','count', 'create', 'update'];
}
