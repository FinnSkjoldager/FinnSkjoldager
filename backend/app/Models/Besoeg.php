<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Models\Medlem;

class Besoeg extends Model
{
    use HasFactory;
    protected $table = 'besoeg';
    protected $fillable = [
        'nr',
        'postnummer',
        'besogsdato',
        'firmanavn',
        'gpspunkt',
        'adresse',
        'hjemmeside',
        'kontaktperson',
        'mailadresse',
        'telefonNr',
        'uopfordretansog',
        'ledigtjob',
        'kommentarer'
    ];
    
    public function medlemmer(): BelongsToMany
    {
        //print_r("ManyToMany".PHP_EOL);
        //print_r($this->belongsToMany(Medlem::class, 'besoeg_medlem', 'besoeg_id', 'medlem_id')->toSql().PHP_EOL);
        return $this->belongsToMany(Medlem::class, 'besoeg_medlem', 'besoeg_id', 'medlem_id');
    }
    /*
    public function items()
    {
        return $this->hasManyThrough(Item::class, Type::class);
        // return $this->hasManyThrough(
        //     Item::class,
        //     Type::class,
        //     'category_id', // Foreign key on the types table...
        //     'type_id', // Foreign key on the items table...
        //     'id', // Local key on the users table...
        //     'id' // Local key on the categories table...
        // );
    }
    */
}