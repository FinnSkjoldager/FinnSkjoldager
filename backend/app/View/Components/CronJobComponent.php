<?php

namespace App\View\Components;

use Illuminate\View\Component;
use App\Crawler\JobSearchCrawler;
use App\Models\Elpris;
use App\Models\Jobsearch;

class Res
{
    public $time = "";
    public $price = 0;
    public function __construct($time, $price)
    {
        $this->time = $time;
        $this->price = $price;
    }
}

class CronJobComponent extends Component
{
    private $jobSearchCrawler = null;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->jobSearchCrawler = new JobSearchCrawler();

    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.cron-job-component');
    }
    public function trans()
    {
        $prisList = Elpris::all();
        $resList = array();
        foreach ($prisList as $pris) {
            if ($pris->PriceArea == "DK") {
                $resList[] = new Res($pris->HourDK, $pris->SpotPriceDKK);
            }
        }
        return $resList;
    }
    /* http://localhost/cronjob/show
       vandrette bjælker
    */
    public function showCronJob1()
    {
        $resList = $this->trans();
        return view('components.cron-job-component')->with(compact('resList'));
    }
    public function runCronJob1()
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

        $resList = $this->trans();
        return view('components.cron-job-component')->with(compact('resList'));
    }
    public function addElPris($time, $price)
    {
        $pris = new Elpris();
        $pris->PriceArea = "DK";
        $pris->HourDK = $time;
        $pris->SpotPriceDKK = $price;
        $pris->save();
    }
    public function deleteCronJob()
    {
        Elpris::truncate();
        $this->addElPris('1', 12);
        $this->addElpris('2', 20);
        $this->addElpris('3', 40);
        $this->addElpris('4', 8);
        $this->addElpris('5', 30);
        $this->addElpris('6', 35);
        $prisList = Elpris::all();
        print_r(count($prisList).'<br>');
        return "deleteCronJob()";
    }
    /* http://localhost/cronjob/run

    */
    public function doSearch($portal, $search)
    {
        if ($portal == "jobindex.dk")
            $list = $this->jobSearchCrawler->getJobindexCrawler($search);
        if ($portal == "jobfinder.dk")
            $list = $this->jobSearchCrawler->getJobfinderCrawler($search);
        if ($portal == "careerjet.dk")
            $list = $this->jobSearchCrawler->getCareerjetCrawler($search);
        foreach ($list as $res) {
            //print_r('<br>'.strlen($res->desc));
            $resList = Jobsearch::select('*')->where('title', $res->title)->get();
            if (count($resList)>0) {
                //print_r('<br>resList '.count($resList)."  ".$resList[0]->title);
                //print_r('<br> '.$resList[0]->count);
                $resList[0]->count++;
                $resList[0]->update = now()->format('Y-m-d');
                $resList[0]->save();
                //print_r('<br>UPDATE');
            } else {
                $res->portal = $portal;
                $res->search = $search;
                $res->company = "";
                $res->count = 0;
                $res->create = now()->format('Y-m-d');
                $res->update = "";
                $res->save();
                //print_r('<br>CREATE');
            }
        }
    }
    public function runCronJob(){
        print_r('<br>runCronJob()');
        //Jobsearch::truncate();
        //$this->doSearch("careerjet.dk", "laravel");
        //return;
        $this->runCronJobPortal("careerjet.dk");
        $this->runCronJobPortal("jobindex.dk");
        $this->runCronJobPortal("jobfinder.dk");
    }
    public function runCronJobPortal($portal)
    {
        $this->doSearch($portal, "laravel");
        $this->doSearch($portal, "angular");
        $this->doSearch($portal, "java");
    }
}
