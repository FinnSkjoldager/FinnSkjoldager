<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Medlem;

class MedlemSeeder extends Seeder
{
    public function create($name)
    {
        //fornavn','efternavn','telefonnr
        Medlem::create([
            'fornavn' => '',
            'efternavn' => $name,
            'telefonnr' => ''
        ]);
    }
    public function run(){
        $this->doRun();
    }
    public function doRun()
    {
        Medlem::truncate();
        $this->create('Alex Grant');
        $this->create('Madison Bullock');
        $this->create('Hamish Nielsen');
        $this->create('Alma Rocha');
        $this->create('Conor Garner');
        $this->create('Leia Barrett');
        $this->create('Stevie Morse');
        $this->create('Gary Deleon');
        $this->create('Sofia Roberts');
        $this->create('Amaan Middleton');
        $this->create('Hari Benton');
        $this->create('Mason Cohen');
        $this->create('Alexia Michael');
        $this->create('Stacey Bartlett');
        $this->create('Malachi Huffman');
        $this->create('Zakir Fleming');
        $this->create('Ahmad Hodge');
        $this->create('Dante Cruz');
        $this->create('Elise Merritt');
        $this->create('Honey Munoz');
    }
}
