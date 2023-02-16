<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\HttpClientTrait;
use App\Models\Elpris;
use App\Models\Jobsearch;

class CronJobController extends Controller
{
    use HttpClientTrait;
    public function runCronJob()
    {
        $plist = $this->getElSpotPrices();
        //print_r($plist[0]['PriceArea']);
        //return gettype($plist[0]);
        foreach ($plist as $p) {
            $pris = new Elpris();
            $pris->PriceArea = $p['PriceArea'];
            $pris->HourDK = $p['HourDK'];
            $pris->SpotPriceDKK = $p['SpotPriceDKK'];
            $pris->save();
            //print_r($pris);
        }
        return "runcronjob() all OK";
    }
    public function showCronJob($querytype, $jobportal)
    {
        /*
        http://localhost/cronjob/show
         $besoeg = Besoeg::select('*')->get();
         $besoeg = $besoeg->sortByDesc('id');
         $besoeg = $besoeg->values()->all();
        */

        //$resList = Jobsearch::all();
        if ($jobportal == '0') {
            if ($querytype=='0') {
                $resList = Jobsearch::orderBy('create', 'desc')
                   ->orderBy('count', 'desc')
                   ->get();
            }
            if ($querytype=='Angular' || $querytype=='Laravel' || $querytype=='Java') {
                $resList = Jobsearch::select('*')
                   ->orderBy('create', 'desc')
                   ->where('search', $querytype)
                   ->get();
            }
        } else {
            if ($querytype=='0') {
                $resList = Jobsearch::orderBy('create', 'desc')
                   ->orderBy('count', 'desc')
                   ->where('portal', $jobportal)
                   ->get();
            }

            if ($querytype=='Angular' || $querytype=='Laravel' || $querytype=='Java') {
                $resList = Jobsearch::select('*')
                   ->orderBy('create', 'desc')
                   ->where('search', $querytype)
                   ->where('portal', $jobportal)
                   ->get();
            }
        }
        /*
                print_r('<br>'.now()->format('Y-m-d'));
                $res = $resList[0];
                foreach ($resList as $res) {
                    print_r('<br>'.$res->created_at."=".$res->create."=".$res->update);
                }
                return;
        */
        return response()->json($resList);
    }
}
