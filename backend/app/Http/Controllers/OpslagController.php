<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Symfony\Component\DomCrawler\Crawler;

class OpslagController extends Controller
{
    //http://localhost/api/opslag/getcvr/avk
    public function getCVR($search)
    {
        $url = "https://cvrapi.dk/api?country=dk&version=6&search=".$search;
        $response = Http::withHeaders([
            'User-agent' => 'finnskjold111',
            'Accept' => 'application/json',
        ])->post($url);
        return $response->json();
        //return '{"vat":40781056,"name":"FD ApS","address":"Anelystparken"}';
    }
    public function getAdresse($search)
    {
        $url = "https://api.dataforsyningen.dk/adresser?q=".$search;
        $response = Http::get($url);
        return $response->json();
    }
    public function getScrap118_0($search)
    {
        //return "getScrap118 ".$search;
        $url = "https://scrap118.herokuapp.com/scrap?search=".$search;
        $response = Http::get($url);
        return [
            'respone' => $response->body()
        ];
    }
     public function getText($ent)
     {
         if ($ent == null || count($ent) == 0) {
             return "";
         }
         return $ent->text();
     }
    # http://localhost/api/opslag/getscrap118/finn+skjoldager
    public function getScrap118($search)
    {
        $url = "http://118.dk";
        #https://118.dk/search/go?pageSize=25&whatName=&whatCategory=&whatPhone=&whatOther=&whereStreet=&whereHouseNumber=&whereZip=&whereCity=&category=
        $response = Http::get($url."?what=".$search);
        $htmlString = (string) $response->getBody();
        $crawler = new Crawler($htmlString);
        $resList = $crawler->filterXPath('//div[@class="result-block"]');
        $debug = false;
        if ($debug) {
            print_r($search);
            print_r('<br>Count: '.count($resList));
        }
        $str = "";
        for ($x = 0; $x < count($resList); $x++) {
            $res = $resList->eq($x);
            $str = $str."Navn: ".$this->getText($res->filter('h3'))."\n";
            $desc = $res->filter('div[class="description-block"]');
            $str = $str."Adresse: ".$this->getText($desc->filter('address'))."\n";
            $str = $str."Tlf. nr. ".$this->getText($desc->filter('p'))."\n";
            $str = $str."\n";
            if ($debug) {
                print_r('<br><b>'.$this->getText($res->filter('h3')).'</b>');
                print_r('<br>Count: '.count($desc->filter('p')));
                print_r('<br>Reklame: '.$this->getText($desc->filter('p')));
                print_r('<br>'.$this->getText($desc->filter('address')));
                print_r('<br>Tlf. '.$this->getText($desc->filter('p')));
            }
        }
        /*
            resarr = html.body.find_all("div", class_='result-block')
            #print(len(resarr))
            resstr = ""
            for divarr in resarr:
                outstr("Name",divarr.h3.a.text.strip())
                descblock = divarr.find("div", class_="description-block")
                outvalue("Adresse",descblock.address)
                if descblock.p is not None:
                    outvalue("Tlf. nr.",descblock.p.a)
                    cvr = divarr.get("s")
                if  cvr.find("CVR") > -1:
                    cvrnr = cvr[4:]
                    outstr("CVR:",cvrnr)
                break
*/
        if (!$debug) {
            return [
                'respone' => utf8_decode($str)
            ];
        }
    }
}
