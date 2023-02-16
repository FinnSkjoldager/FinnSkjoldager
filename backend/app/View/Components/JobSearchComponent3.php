<?php

namespace App\View\Components;

use Illuminate\View\Component;

use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

class JobSearchComponent extends Component
{
    private $count = 0;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.job-search-component');
    }

    public function getDiv($div, $i)
    {
        $divResult = $div;
        while ($i > 0) {
            $i--;
            $lgd = $divResult->childNodes->length;
            print_r("LGD ".$lgd."<br>");
            if ($lgd == 0) {
                break;
            }
            foreach ($div->childNodes as $child) {
                if ($child->nodeType != 1) {
                    continue;
                }
                $divResult = $child;
                break;
            }
        }
        return $div;
    }
    public function getNodeXPath($node)
{
    // REMEMBER THAT XPATHS USE BASE-1 INSTEAD OF BASE-0!!!

    // Get the index for the current node by looping through the siblings.
    $parentNode = $node->parentNode;
    if ($parentNode != null) {
        $nodeIndex = 0;
        do {
            $testNode = $parentNode->childNodes->item($nodeIndex);
            $nodeName = $testNode->nodeName;
            $nodeIndex++;

            // PHP trickery!  Here we create a counter based on the node
            //  name of the test node to use in the XPath.
            if (!isset($$nodeName)) {
                $$nodeName = 1;
            } else {
                $$nodeName++;
            }

            // Failsafe return value.
            if ($nodeIndex > $parentNode->childNodes->length) {
                return("/");
            }
        } while (!$node->isSameNode($testNode));

        // Recursively get the XPath for the parent.
        return($this->getNodeXPath($parentNode) . "/{$node->nodeName}[{$$nodeName}]");
    } else {
        // Hit the root node!  Note that the slash is added when
        //  building the XPath, so we return just an empty string.
        return("");
    }
}
public function getNext($ent)
    {
        $this->count++;
        if ($this->count == 9) {
           // die();
        }
        if ($ent->childNodes != null && $ent->childNodes[0] != null) {
            print_r("CHI:<br>".$this->count." ".$ent->childElementCount);
            if ($ent->childElementCount > 0) {
                if ($this->count < 6) {
                    print_r($ent->childNodes[0]->tagName);
                } else {
                    if ($ent->childNodes[0]->nodeType == XML_TEXT_NODE) {
                        print_r($ent->childNodes[0]->wholeText);
                    }
                    dd($ent->childNodes[0]);
                }
            }
        } else {
            $p = $ent->nextSibling;
        }

        print_r("<br>SIB:");
        if ($ent->nextSibling->nodeType == XML_ELEMENT_NODE) {
            print_r($ent->nextSibling->nodeName);
        }
        //dd($ent->nextSibling);


        return;
    }
    //https://www.jobindex.dk/jobsoegning?address=Visbjerg+Hegn+226+8320+M%C3%A5rslet&radius=50&q=laravel
    public function getJobindex($job)
    {
        $url = "https://www.jobindex.dk/jobsoegning?address=Visbjerg+Hegn+226+8320+M%C3%A5rslet&radius=50&q=".$job;
        $response = Http::get($url);
        $htmlString = (string) $response->getBody();
        // HTML is often wonky, this suppresses a lot of warnings
        libxml_use_internal_errors(true);
        // https://www.scrapingbee.com/blog/web-scraping-php/
        $doc = new \DOMDocument();
        $doc->loadHTML($htmlString);
        $xpath = new \DOMXPath($doc);
        $jobList = $xpath->query('//div[@class="results"]');
        foreach ($jobList as $jobRes) {

            dd($jobRes);
            $job = $xpath->query('//div[@class="PaidJob-inner"]', $jobRes)[0]->childNodes;
            dd($job);

            foreach ($job as $ent) {
                print_r($this->getNodeXPath($ent));
                //return;
                
                $this->getNext($ent);
                //return;
            }
            return;
            print_r($job[7]);
            dd($job[8]->nextSibling->nextSibling);
            //print_r($j[0]->childNodes[5]->childNodes[0]->nextSibling->childNodes[0]->childNodes[0]->textContent);
            if ($job->childNodes[0] != null) {
                print_r($job->childNodes[0]);
            } else {
                $p = $job->nextSibling;
                //print_r($p-tagName.$p->wholeText);
                print_r($p->childNodes[0]->childNodes[0]->wholeText);
                //dd($p->childNodes[0]->childNodes[0]->wholeText);
            }
        }
    }
}
