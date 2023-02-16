<?php

namespace App\View\Components;
use Illuminate\View\Component;
use Illuminate\Support\Facades\Http;
use Symfony\Component\HttpClient\HttpClient;
use Illuminate\Http\Request;
use Symfony\Component\DomCrawler\Crawler;
use App\Traits\HttpClientTrait;

class JobSearchComponent extends Component
{
    use HttpClientTrait;
    public static $errorObj;
    public static $loop = 0;
    public function render()
    {
        return view('components.job-search-component');
    }
   
    //https://www.jobindex.dk/jobsoegning?address=Visbjerg+Hegn+226+8320+M%C3%A5rslet&radius=50&q=laravel
    //https://job.jobnet.dk/CV/FindWork?Offset=0&SortValue=BestMatch&SearchString=Laravel&LocationZip=8320&SearchInGeoDistance=50
    //http://localhost/jobindexsearch/laravel
    public function getJobindex($job)
    {
        $list = $this->getJobindexTrait($job);
       foreach ($list as $res) {
           print_r($res->title);
           print_r($res->desc);
       }

    }
}
