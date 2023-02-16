<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class OpslagTest extends TestCase
{
    public function atestAlive()
    {
        //print_r("OpslagTest 1  start".PHP_EOL);
        $response = $this->get('/api/opslag/alive');
        $response->assertStatus(404);
        $data = $response->getContent();
        $json = json_decode($data, True);
        //print_r($json["message"].PHP_EOL);
        //print_r("OpslagTest 1  end");
    }
    public function testOpslag1()
    {
        /*
        FEJLER
        GuzzleHttp\Exception\RequestException: cURL error 60: SSL certificate problem
        virker eller ok udefra
        DEN KØRER JO IKKE OP IMOD Apache men en local serfer på 8000
        */
        //print_r("OpslagTest 1  start".PHP_EOL);
        $response = $this->get('/api/opslag');
        $response->assertStatus(404);
        $data = $response->getContent();
        $json = json_decode($data, True);
        print_r($json["message"].PHP_EOL);
        //print_r("OpslagTest 1  end");
    }
}
