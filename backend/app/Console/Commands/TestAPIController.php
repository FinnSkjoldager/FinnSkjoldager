<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class TestAPIController extends Command
{
    //php artisan command:testapi
    protected $signature = 'command:testapi';
    protected $description = 'TestAPI';
    function o($st){
        printf($st."\n");
    }
    function checkResponse($response){
        $this->o($response->status());
        $this->o($response->body());
    }
    public function handle()
    {
        $this->o("TestAPIController");
        $req = [
            "status" => true,
            "message" => "Besoeg Added."
        ];
        $url = "http://localhost/api/send-mail";
        $response = Http::withHeaders([
            'User-agent' => 'finnskjold111',
            'Accept' => 'application/json',
        ])->post($url, $req);
        $this->checkResponse($response);
        //var_dump($response->status);
        return Command::SUCCESS;
    }
}
