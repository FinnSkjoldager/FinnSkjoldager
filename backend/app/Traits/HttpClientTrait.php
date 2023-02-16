<?php
namespace App\Traits;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;
use Symfony\Component\DomCrawler\Crawler;

trait HttpClientTrait
{
    /*
    http://localhost/opslag/voreselforbrug
    1. Authorization Token til dine data oprettes på
        http://eloverblik.dk
        NemID login
        Vælg DATADELING under "Manden" øverst til højre
        Token er oprettet og gælder til 30.09.2023
    */
    /*
     Swagger API overblik
     https://api.eloverblik.dk/customerapi/index.html
     Brug af Swagger
        a. "Authorized" brug Authorization Token
        b. "Token" kopier result
     2. Api Token oprettes
    */
    public function getApiToken()
    {
        $AuthorizationToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlblR5cGUiOiJDdXN0b21lckFQSV9SZWZyZXNoIiwidG9rZW5pZCI6IjNkZjA2MGRlLWI3NTgtNDkwOS1iYjM3LTk2ZTE2NzFhODQwOSIsIndlYkFwcCI6WyJDdXN0b21lckFwaSIsIkN1c3RvbWVyQXBwQXBpIl0sImp0aSI6IjNkZjA2MGRlLWI3NTgtNDkwOS1iYjM3LTk2ZTE2NzFhODQwOSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiUElEOjkyMDgtMjAwMi0yLTUxMzk5OTQzMjc3NCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2dpdmVubmFtZSI6IkZpbm4gR3JhbSBTa2pvbGRhZ2VyIiwibG9naW5UeXBlIjoiS2V5Q2FyZCIsInBpZCI6IjkyMDgtMjAwMi0yLTUxMzk5OTQzMjc3NCIsInR5cCI6IlBPQ0VTIiwidXNlcklkIjoiNDA0ODY5IiwiZXhwIjoxNjk2NTY5OTU5LCJpc3MiOiJFbmVyZ2luZXQiLCJ0b2tlbk5hbWUiOiJmaW5uMSIsImF1ZCI6IkVuZXJnaW5ldCJ9.H9Z6nd4MF6zTBqjCBN_wAP6dfFMLG2tDE-jbVZhSF-I";
        $url = 'https://api.eloverblik.dk/customerapi/api/token';
        $response = Http::withHeaders([
            'accept'=>'application/json',
            'Authorization'=> $AuthorizationToken
        ])->get(
            $url
        );
        if (false) {
            print_r($response->getStatusCode());
            print_r($response->getReasonPhrase());
            print_r($response->body());
            //dd($json = json_decode($response->body(), true));
        }
        $json = json_decode($response->body(), true);
        return 'Bearer '.$json['result'];
    }
    /*
    3. gettimeseries
    */
    public function getVoresElForbrugBase(
        $from,
        $to,
        $inc,
        $text
    ) {
        $ApiToken = $this->getApiToken();
        $url = 'https://api.eloverblik.dk/customerapi/api/meterdata/gettimeseries/'.$from.'/'.$to.'/'.$inc;
        //print_r($url."<br>");
        //print_r($ApiToken."<br>");
        $response = Http::withHeaders([
            'accept'=>'application/json',
            'Authorization'=> $ApiToken,
            'Content-Type'=>'text/json'
        ])->post(
            $url,
            [
                'meteringPoints' => [
                    'meteringPoint' => ['571313123200406239']
                ]
            ]
        );
        if (false) {
            print_r($response->getStatusCode());
            print_r($response->getReasonPhrase());
            print_r($response->body());
        }
        $json = json_decode($response->body(), true);
        if ($json == null) {
            return null;
        }
        $doc = $json["result"][0]["MyEnergyData_MarketDocument"];
        $periodeblok = $doc["period.timeInterval"];
        $errorText = $json["result"][0]["errorText"];
        if ($errorText != 'NoError') {
            print_r($errorText."<br>");
            if ($periodeblok != null) {
                print_r("Periode: ".$periodeblok['start']." ".$periodeblok['end']."<br>");
            }
        }
        //dd($json);
        $periode = $periodeblok["start"]." : ".$periodeblok["end"];
        $parr = $doc['TimeSeries'][0]['Period'];
        $resList = array();
        $sum = 0.0;
        foreach ($parr as $p) {
            $time = $p['timeInterval'];
            $kwt = floatval($p['Point'][0]['out_Quantity.quantity']);
            if ($inc == 'Hour')$kwt = $kwt * 10.0;
            $sum += $kwt;
            $resList[] = new PrisResult($time['start'], $time['end'], $kwt);
        }
        //dd(array($resList, $text));
        $sum = strval(round($sum,2));
        return array($text,$resList,$sum);
    }
    // http://localhost/opslag/voreselforbrug/lastday
    public function getVoresElForbrugLastDay($days)
    {
        $daysint = intval($days);
        date_default_timezone_set('UTC');
        $lastday = date("Y-m-d", mktime(0, 0, 0, date("m"), date("d")-$daysint, date("Y")));
        $today = date("Y-m-d");
        //'Actual', 'Quarter'
        $inc = 'Hour';
        return $this->getVoresElForbrugBase($lastday, $today, $inc, 'de sidste døgn');
    }
    public function getVoresElForbrugLastMonth()
    {
        date_default_timezone_set('UTC');
        $lastmonth = date("Y-m-d", mktime(0, 0, 0, date("m")-1, date("d"), date("Y")));
        $today = date("Y-m-d");
        $inc = 'Day';
        return $this->getVoresElForbrugBase($lastmonth, $today, $inc, 'den sidste måned');
    }
    public function getVoresElForbrugLastYear()
    {
        date_default_timezone_set('UTC');
        $lastyear = date("Y-m-d", mktime(0, 0, 0, date("m"), date("d"), date("Y")-1));
        $today = date("Y-m-d");
        $inc = 'Month';
        return $this->getVoresElForbrugBase($lastyear, $today, $inc, 'det sidste år');
    }
    // https://api.energidataservice.dk/dataset/Elspotprices?limit=5
    public function getFloat($f)
    {
        return $f;
    }
    public function getTime($t)
    {
        return $t."UES";
    }
    // https://api.energidataservice.dk/dataset/Elspotprices?offset=0&filter=%7B%22PriceArea%22:%22dk1%22%7D&sort=HourUTC%20DESC&timezone=dk
    public function getElspotprices($region)
    {
        $url = "https://api.energidataservice.dk/dataset/Elspotprices?limit=5";
        $url = "https://api.energidataservice.dk/dataset/Elspotprices?offset=0&filter=%7B%22PriceArea%22:%22".$region."%22%7D&sort=HourUTC%20DESC&timezone=dk1&limit=24";
        $response = Http::get($url);
        $json = json_decode($response->body(), true);
        $parr = $json["records"];
        return $parr;
    }
}
