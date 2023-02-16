<?php

namespace App\Crawler;

use Illuminate\Support\Facades\Http;
use Symfony\Component\DomCrawler\Crawler;
use App\Models\Jobsearch;

class JobSearchCrawler
{
    private $resList = array();
    public function getText($ent)
    {
        if ($ent == null || count($ent) == 0) {
            return "";
        }
        return $ent->text();
    }
        public function showTag($crawler, $debug, $tag, $out)
        {
            $crawler = $crawler->children()->filter($tag);
            //$crawler = $crawler->filter($tag);
            if ($debug) {
                print_r("<br>ant ".count($crawler));
                print_r("<br> ");
                print_r($crawler->first()->extract(['_name', '_text', 'class',  '*']));
            }
            $str = "";
            foreach ($crawler as $element) {
                if ($element != null) {
                    $s = "<".$out." class='text'>".$element->textContent."</".$out.">";
                    $str = $str.$s;
                    //print_r($s);
                }
            }
            return $str;
        }
        public function showJobPaid($crawler)
        {
            $search = '//div[@class="PaidJob-inner"]';
            $jobList = $crawler->filterXPath($search);
            for ($x = 0; $x < count($jobList); $x++) {
                $job = $jobList->eq($x);
                $jobsearch =  new Jobsearch();
                $jobsearch->title = substr($this->showTag($job, false, 'a', 'b'), 0, 200);
                $jobsearch->desc = $this->showTag($job, false, 'p', 'p');
                //dd($job->children()->filter('a')->eq(1)->attr('href'));
                $st = $job->children()->filter('a')->eq(1)->attr('href');
                $jobsearch->url = $st;
                //print_r('<br>URL '.$st);
                //print_r($job->children()->filter('a')->eq(1)->attr('href'));
                $this->resList[] = $jobsearch;
            }
        }
         public function showJobRobot($crawler)
         {
             try {
                 $search = '//div[@class="jix_robotjob-inner"]';
                 $jobList = $crawler->filterXPath($search);
                 for ($x = 0; $x < count($jobList); $x++) {
                     $this->job =  new Jobsearch();
                     $this->job->title = substr($this->showTag($jobList->eq($x), false, 'a', 'b'), 0, 200);
                     $str = "";
                     $brList = $jobList->eq($x)->filter('br');
                     foreach ($brList as $br) {
                         $errorObj = $br;
                         if ($br != null && $br->nextSibling != null) {
                             if ($br->nodeType == XML_ELEMENT_NODE) {
                                 $s = "<p class='text'>".$br->nextSibling->textContent."</p>";
                                 $str = $str.$s;
                             //print_r($s);
                             } else {
                                 $s = "<p class='text'>".$br->nextSibling->wholeText."</p>";
                                 $str = $str.$s;
                                 //print_r($s);
                             }
                         }
                     }
                     $text1 = $this->getText($jobList->eq($x)->filter('b')->eq(0));
                     $text2 = $this->getText($jobList->eq($x)->filter('b')->eq(1));
                     $s = "<p class='text'>".$text1.", ".$text2."</p>";
                     $this->job->desc = $s.$this->showTag($jobList->eq($x), false, 'cite', 'p');
                     $this->job->url = "";
                     $this->resList[] = $this->job;
                 }
                 //throw new \Exception("Some error message");
             } catch(\Exception $e) {
                 echo $e->getMessage();
                 dd($errorObj);
             }
         }
        public function getJobindexCrawler($job)
        {
            $url = "https://www.jobindex.dk/jobsoegning?address=Visbjerg+Hegn+226+8320+M%C3%A5rslet&radius=50&q=".$job;
            $response = Http::get($url);
            $htmlString = (string) $response->getBody();
            $crawler = new Crawler($htmlString);
            // Copy/Xpath from Chrome
            //*[@id="result_list_box"]/div[1]/div[2]/div/div/div/div[1]
            // Copy/JS from Chrome
            //document.querySelector("#result_list_box > div.results > div:nth-child(1) > div > div > div.PaidJob-inner")
            //document.querySelector("#result_list_box > div.results > div:nth-child(2) > div > div > div > div.jix_robotjob-inner")
            //$this->testJobAll($crawler, '//div[@class="jobsearch-result"]');
            $this->showJobPaid($crawler);
            $this->showJobRobot($crawler);
            return $this->resList;
        }
        public function getJobfinderTag1($job, $class)
        {
            $text =  $job->children()->filter($class)->text();
            //print_r('<br>'.$text);
            return $text;
        }
        public function getJobfinderTag2($job, $class)
        {
            $d = $job->children()->filter($class);
            if ($d == null) {
                return "";
            }
            $d = $d->getNode(0);
            if ($d == null) {
                return "";
            }
            $text =  $d->childNodes[1]->wholeText;
            //print_r('<br>'.$text);
            return $text;
        }
       public function getJobfinderCrawler($job)
       {
           //https://www.jobfinder.dk/jobs?keywords=laravel&radius=20&latlon=M%C3%A5rslet%2C%20Danmark
           $url = "https://www.jobfinder.dk/jobs?radius=20&latlon=M%C3%A5rslet%2C%20Danmark&keywords=".$job;
           $response = Http::get($url);
           $htmlString = (string) $response->getBody();
           $crawler = new Crawler($htmlString);
           $search = '//div[@class="node-list__item"]';
           $jobList = $crawler->filterXPath($search);
           print_r(count($jobList));
           for ($x = 0; $x < count($jobList); $x++) {
               $job = $jobList->eq($x);
               $jobsearch =  new Jobsearch();
               $jobsearch->title = $this->getJobfinderTag1($job, '.node-list__item-title');
               //dd($job->children()->filter('.node-list__item-title')->getNode(1)->childNodes[0]->attributes[0]);
               $st = $job->children()->filter('.node-list__item-title')->getNode(1)->childNodes[0]->attributes['href']->value;
               $jobsearch->url = 'https://jobfinder.dk'.$st;
               //print_r('<br>URL '.$st);
               $st = $this->getJobfinderTag1($job, '.node-list__item-recruiter a').'<br>';
               $st = $st.$this->getJobfinderTag2($job, '.node-list__item-location');
               $st = $st.$this->getJobfinderTag2($job, '.node-list__item-jobtype');
               $jobsearch->desc = $st.$this->getJobfinderTag1($job, '.node-list__item-description');
               $this->resList[] = $jobsearch;
           }
           return $this->resList;
       }
          public function getCareerjetTag($job, $class)
          {
              $d = $job->children()->filter($class);
              $text = $d->text();
              //print_r('<br>'.$text);
              return $text;
          }
         public function getCareerjetCrawler($job)
         {
             $url ="https://www.careerjet.dk/sog/jobs?l=Mårslet&radius=40&s=".$job;
             $response = Http::get($url);
             $htmlString = (string) $response->getBody();
             if (false) {
                 $fileOut = fopen("linkedin.html", "w");
                 fwrite($fileOut, "linkedin.html");
                 fwrite($fileOut, $htmlString);
                 fclose($fileOut);
             }
             $crawler = new Crawler($htmlString);
             print_r('<br>Careerjet');
             $search = '//article[@class="job clicky"]';
             $jobList = $crawler->filterXPath($search);
             print_r('<br>Count '.count($jobList));
             for ($x = 0; $x < count($jobList); $x++) {
                 $job = $jobList->eq($x);
                 $this->job =  new Jobsearch();
                 $this->job->title = $this->getCareerjetTag($job, 'header > h2 > a');
                 $atag = $job->children()->filter('header > h2 > a');
                 //Crawler ->getNode(0)
                 //DOMEntity ->attributes[0]->value
                 $this->job->url = "https://www.careerjet.dk".$atag->getNode(0)->attributes['href']->value;
                 $this->job->company = $this->getCareerjetTag($job, '.company');
                 $st = $this->getCareerjetTag($job, '.location');
                 $st = $st.$this->getCareerjetTag($job, 'div');
                 $this->job->desc = $st.$this->getCareerjetTag($job, 'footer span');
                 $this->resList[] = $this->job;
             }
             return $this->resList;
         }
}
