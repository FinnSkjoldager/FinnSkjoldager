<?php
namespace App\Traits;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;
use Symfony\Component\DomCrawler\Crawler;

trait FacebookTrait
{
    function getToken(){
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
        if (!isset($json->access_token)){
            echo $st."<br>";
            echo "getToken()11 error <br>";
            return;
        }
        echo $json->access_token."<br>";
        return $json->access_token;
    }
    function callF($cmd){
        //10232385633087548/posts?fields=attachments{media,title},id,message
        //10232385633087548_10232385049712964?fields=source,link,message,attachments{media,title}
        $token = "access_token=EAANsY657YJsBAI0iLSgOB75r30ep9BHaz6kQEzgAw32LYcszFSJT3g46847gpmJjNsdaeat47xpmeYAZCKuZCKfl6mOgpOM2v7kau7pBlWpQhiLp2PmvSS3zMCYCZCMAZCz3bYVCzm9cFGnkUZA39q08mob2Y1F3Cj0BehIav0273dptTSKZAF0P7ZCuTXFxhSPrBl7NZCPAx4HhoNwfyIpG";
        //$token =  "access_token=".$this->getToken();
        //return;
        $url = "https://graph.facebook.com/v16.0/".$cmd.$token;
        $response = Http::get($url);
        $st = (string) $response->getBody();
        return $st;
    }
    function getPhoto($id){
        $cmd = $id."?fields=images&";
        $st = $this->callF($cmd);
        $json = json_decode($st);
        if (isset($json->images))
        foreach( $json->images as $d){
            echo $d->height.PHP_EOL;
            if ($d->height == "320"){
                echo '<img src="'.$d->source.'">';
            }
        }
    }
    function getUserPhotos(){
        $cmd = "10232385633087548/photos?";
        $st = $this->callF($cmd);
        $json = json_decode($st);
        foreach ($json->data as $d) {
            $this->getPhoto($d->id);
        }
    }
    function getPosts(){
        $this->getUserPhotos();
        return;
        $br = PHP_EOL."<br>";
        $cmd = "10232385633087548/posts?fields=link,message&";
        $st = $this->callF($cmd);
        $json = json_decode($st);
        //dd($json);
        if (!isset($json->data)){
            echo "NO DATA ".$st.PHP_EOL.$br;
            return;
        }
        $i = 0;
        foreach( $json->data as $d){
            //echo "<p>".$d->message."</p>";
            if( isset($d->link) ){
                $link = $d->link;
                // do something
            //echo "##link ".$d->link.$br;
            $i1 = strpos($link, "photo.php?fbid=");
            $i2 = strpos($link, "set=");
            //echo $i1." ".$i2.PHP_EOL;
            $id = substr($link, $i1+15, $i2-$i1-16);
            if ($i1>1){
                echo "## ".$link.$br;
                echo "##ID ".$id.$br;    
            }
            $this->getPhoto($id);
            //break;
        }  
        }
        echo "getPosts end".PHP_EOL;
    }
    function getImg(){
       $img = '<IMG
        SRC="data:image/gif;base64,R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAw
        AAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFz
        ByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSp
        a/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJl
        ZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uis
        F81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PH
        hhx4dbgYKAAA7"
        ALT="Larry">';
        echo $img;
    }
}