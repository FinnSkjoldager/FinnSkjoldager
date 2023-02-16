<?php

namespace App\Traits;

use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;
use Symfony\Component\DomCrawler\Crawler;

trait FacebookTrait
{
    public function getToken()
    {
        $url = "https://graph.facebook.com/oauth/access_token
         ?client_id=963600315015323
         &client_secret=ffb750865709a2df9e4117283e13572c
         &grant_type=client_credentials
         ";
        $url = "https://graph.facebook.com/oauth/access_token?client_id=963600315015323&client_secret=ffb750865709a2df9e4117283e13572c&grant_type=client_credentials&scope=pages_read_user_content";
        // &scope=pages_read_user_content";
        // &redirect_uri=http://localhost:8000/api/f
        $response = Http::get($url);
        $st = (string) $response->getBody();
        $json = json_decode($st);
        if (!isset($json->access_token)) {
            echo $st."<br>";
            echo "getToken()11 error <br>";
            return;
        }
        echo $json->access_token."<br>";
        return $json->access_token;
    }
    public function callF($cmd)
    {
        //10232385633087548_10232385049712964?fields=source,link,message,attachments{media,title}
        $token = "access_token=EAANsY657YJsBACqyG2anGg9Glh9tffjagBh6XZAgAavkvsIP7rjZCEXhG4uTGUCwhF8RfBYcdsy35ey61rRvJ4gs4OfmddZAW90gjULvcp0fxVVUzjBKCMcDe44ykTvx12vuSGuB1lZBjVy3XB6mhmdtu06LsdYkiG5H1fOYtuiYy69ryQ1bkc9dsTBwQ9IPZCWpPi0YBZBTRSAw6Xd9HoSFoKPKgmSWK5gODyX65nygpdnybZCMHyx";
        //$token =  "access_token=".$this->getToken();
        //return;
        $url = "https://graph.facebook.com/v16.0/".$cmd.$token;
        $response = Http::get($url);
        $st = (string) $response->getBody();
        return $st;
    }
    public function getPhoto($id)
    {
        $cmd = $id."?fields=images&";
        $st = $this->callF($cmd);
        $json = json_decode($st);
        if (isset($json->images)) {
            foreach ($json->images as $d) {
                echo $d->height.PHP_EOL;
                if ($d->height == "320") {
                    echo '<img src="'.$d->source.'">';
                }
            }
        }
    }
    public function getUserPhotos()
    {
        $cmd = "10232385633087548/photos?";
        $st = $this->callF($cmd);
        $json = json_decode($st);
        foreach ($json->data as $d) {
            $this->getPhoto($d->id);
        }
    }
    public function getPosts()
    {
        $cmd = "10232385633087548/posts?fields=attachments{media,title},id,message&";
        $st = $this->callF($cmd);
        $json = json_decode($st);
        if (!isset($json->data)) {
            echo "NO DATA ".$st."<br>";
            return;
        }
        foreach ($json->data as $d) {
            //echo "<p>".$d->message."</p>";
            //$src = $d->attachments->data[0]->media->image->src;
            if (isset($d->attachments)
            && isset($d->attachments->data[0])
            && isset($d->attachments->data[0]->media)
            && isset($d->attachments->data[0]->media->image)
            && isset($d->attachments->data[0]->media->image->src)
            ) {
                if (isset($d->message)) {
                    echo $d->message."<br>";
                }
                $src = $d->attachments->data[0]->media->image->src;
                echo '<img src="'.$src.'"><br>';
                echo $d->id."<br>";
                $cmd = $d->id."?fields=attachments{media,title},id,message&";
                $st = $this->callF($cmd);
                $json = json_decode($st);
                //dd($json);
                if (!isset($json->attachments)) {
                    $src = $json->attachments->data->media->image->src;
                    echo '<img src="'.$src.'"><br>';
                }
                //$this->getPhoto($id);
                //break;
            }
        }
        echo "getPosts end<br>";
    }
}
