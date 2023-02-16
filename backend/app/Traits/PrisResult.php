<?php

namespace App\Traits;

class PrisResult
{
    public $timefrom = "";
    public $timeto = "";
    public $price = 0;
    public function __construct($timefrom, $timeto, $price)
    {
        $this->timefrom = substr($timefrom,0,10);
        $this->timeto = substr($timeto, 0, 10);

        $this->price = $price;
    }
}
