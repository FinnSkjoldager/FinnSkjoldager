<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\FacebookTrait;

class FacebookController extends Controller
{
    use FacebookTrait;
    public function index(){
        $this->getPosts();
       //$this->getImg();
        return "All ok";
    }
}
