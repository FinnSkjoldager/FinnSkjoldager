<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use App\Traits\FacebookTrait;

class FacebookCommand extends Command
{
    use FacebookTrait;
    protected $signature = 'facebook';
    protected $description = 'Command description';
    // https://github.com/PiedWeb/FacebookScraper.git
    //    "symfony/dom-crawler": "^6.0", removed
    public function handle()
    {   
        $this->getPosts();
        echo "All ok";
        return Command::SUCCESS;
        $token = "access_token=EAANsY657YJsBACp8zky92sZA9FyzaV9D6Fj2MztSuGzO0nPZAIN2Oo8DUdaEpwlMPYeZBnJaFQCx1EOpT3GIbS5Bc2am28C2ZCohas8aXZCFHJWoqcPkFvZAJNJWCQzvZAQtIJBs90NbbTVQjjukAvSrK1ZCeJeszSlpqjMZCRU2Em6cZCr1ZAqcSahKwsiv5HfZC0fKQeg64FYTVAZDZD";
        $token = "access_token=EAANsY657YJsBAAlhBo5Rq2wjZAHjIAVw4pFhPxAhcO9sooenkfKoPAoDK4ZBqxZCrx9sdLonkopZC7PO0OeGZCuKDZCmCA9aOaAIbe873tE9ub3vZC3uJPiXRGumxUQYf0ZCGNd7TWxbaLS0Ow51606yfZA1ZCiQgjgqZCR1OMbUpoFE8ZCZB6CUS5s8eWT3QrsCgAgORia8ccx6s3QZDZD";
        $cmd = "me";
        $cmd = "10232385633087548/posts";
        $cmd = "10232385633087548_10232385049712964?fields=link&";
        $cmd = "10232385049072948?fields=images&";
        $url = "https://graph.facebook.com/v16.0/".$cmd.$token;
        $response = Http::get($url);
        $st = (string) $response->getBody();
        $json = json_decode($st);
        //var_dump($json->name);
        //var_dump(count($json->data));
        var_dump($json);
        $url = "https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/329030781_5946105508792575_7644657663318751134_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=110474&_nc_ohc=6NNTGRh0PmYAX_eHfYr&_nc_ht=scontent-cph2-1.xx&edm=AMAeTUEEAAAA&oh=00_AfCaqx4laV6c57B9KAXacU1E-9G433x3FnhtdFq4pct_nA&oe=63EEF16E";
        $response = Http::get($url);
        $st = (string) $response->getBody();
        var_dump($st); 
        
        /*
        <img data-visualcompletion="media-vc-image" alt="Kan være et billede af vej, træ, græs, natur og himmel" class="x85a59c x193iq5w x4fas0m x19kjcj4" referrerpolicy="origin-when-cross-origin" src="https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/329030781_5946105508792575_7644657663318751134_n.jpg?_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=8bfeb9&amp;_nc_ohc=6NNTGRh0PmYAX_eHfYr&amp;_nc_ht=scontent-cph2-1.xx&amp;oh=00_AfAVi9arcP6J7kOKoIEOu4NXxeZWF5dsUjEsQi-9oj76Uw&amp;oe=63EEF16E">
        */
        return Command::SUCCESS;
    }
}
