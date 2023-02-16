<?php

namespace App\View\Components;

use Illuminate\View\Component;
use App\Traits\HttpClientTrait;

class OpslagComponent extends Component
{
    use HttpClientTrait;
    public function render()
    {
        return "OpslagComponent render()";
    }
    /*
    Aflæs jeres elmåler 
    http://localhost/opslag/voreselforbrug
    */
    public function voresElForbrug(){
       return view('components.opslag-voreselforbrug');
    }
    public function voresElForbrugLastDay($days){
       //return $this->getApiToken();
       $resList = $this->getVoresElForbrugLastDay($days);
       if ($resList == null) {
           return "Servicen https://api.eloverblik.dk/customerapi Virker ikke for øjeblikket !";
       }
       if (gettype($resList) == "string") {
           return $resList;
       }
       $seldays=[
                ["value" => 7, "text" => "7 dage"],
                ["value" => 14, "text" => "14 dage"],
                ["value" => 21, "text" => "21 dage"],
                ["value" => 28, "text" => "28 dage"],
                ["value" => 36, "text" => "36 dage"],
            ];
       $seldays = json_encode($seldays);
       $seldays = json_decode($seldays);
       return view('components.opslag-voreselforbrug-result')->with(compact('resList','days','seldays'));
   }
    public function voresElForbrugLastMonth(){
        $resList = $this->getVoresElForbrugLastMonth();
        if ($resList == null)
            return "Servicen https://api.eloverblik.dk/customerapi Virker ikke for øjeblikket !";
        if (gettype($resList) == "string") {
            return $resList;
        }
        return view('components.opslag-voreselforbrug-result')->with(compact('resList'));
     }
    public function voresElForbrugLastYear(){   
       $resList = $this->getVoresElForbrugLastYear();
       if ($resList == null) {
           return "Servicen https://api.eloverblik.dk/customerapi Virker ikke for øjeblikket !";
       }
       if (gettype($resList) == "string") {
           return $resList;
       }
       return view('components.opslag-voreselforbrug-result')->with(compact('resList'));
   }
    //** http://localhost/opslag/elspotprices
    public function elSpotPrices($region){
        $p = $this->getElSpotPrices($region);
        return view('components.opslag-elspotprices')->with(compact('p','region'));
    }
}
