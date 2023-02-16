<?php

use Tests\TestCase;
use App\Models\Medlem;
use App\Models\Besoeg;
use App\Models\Besoeg1;

class MedlemTest extends TestCase
{
    public function testBesoegAll(){
        $response = $this->get('/api/besoeg/getall');
        $data = $response->getContent();
        $json = json_decode($data, True);
        print_r("testBesoegAll count ".count($json).PHP_EOL);
        //var_dump($data);
        //var_export($besoeg[0]); 
    }
    
    public function testBesoegAddMedlemMed(){
        $response = $this->post('/api/besoeg/medlem/new/52/5');
        $data = $response->getContent();
        //print_r($response['message']);
        //print_r($data);
    }
    
    public function testBesoegRemoveMedlem(){
        $response = $this->delete('/api/besoeg/medlem/delete/52/5');
        $data = $response->getContent();
    }
    public function testBesoegMedlemmer(){
        $response = $this->get('/api/besoeg/findmedlemid/52');
        $data = $response->getContent();
        $json = json_decode($data, True);
        print_r("testBesoegMedlemmer count ".count($json).PHP_EOL);
    }
    /*
    public function testMedlemFindById(){
        return;
        $response = $this->get('/api/medlem/4');
        $data = $response->getContent();
        //print_r($response["firmanavn"]);
        $json = json_decode($data, True);
        $medlem = new Medlem(
            json_decode($data, true)
        );
        print_r($medlem->fornavn.PHP_EOL);
        //print_r("MEDLEM ".$medlem.PHP_EOL);
        //$response->assertStatus(200);   
    }

    public function testBesoegFindById(){
        $response = $this->get('/api/besoeg/52');
        $data = $response->getContent();
        $json = json_decode($data, True);
        //print_r($json);
        $besoeg = new Besoeg($json);
        foreach ($besoeg->medlemmer as $medlem) {
            echo $medlem.PHP_EOL;
        }
        print_r("HVAD ".$besoeg->firmanavn.PHP_EOL);
        print_r("HVAD ".$besoeg);
        //$medlem.$besoeg->medlemmer().PHP_EOL);
        //$response->assertStatus(200);   
    }
    
    public function testNew(){
        return;
        $medlem = new Medlem();
        $medlem->fornavn = "Finn";
        $medlem->efternavn = "Skjoldager";
        $json = $medlem->toJson();
        $response = $this->json('post', "/api/medlem/new",[$json]);
        dd($response->getContent());
    }
    
    /*
    public function testsArticlesAreCreatedCorrectly()
    {
        $user = factory(User::class)->create();
        $token = $user->generateToken();
        $headers = ['Authorization' => "Bearer $token"];
        $payload = [
            'title' => 'Lorem',
            'body' => 'Ipsum',
        ];

        $this->json('POST', '/api/articles', $payload, $headers)
            ->assertStatus(200)
            ->assertJson(['id' => 1, 'title' => 'Lorem', 'body' => 'Ipsum']);
    }

    public function testsArticlesAreUpdatedCorrectly()
    {
        $user = factory(User::class)->create();
        $token = $user->generateToken();
        $headers = ['Authorization' => "Bearer $token"];
        $article = factory(Article::class)->create([
            'title' => 'First Article',
            'body' => 'First Body',
        ]);

        $payload = [
            'title' => 'Lorem',
            'body' => 'Ipsum',
        ];

        $response = $this->json('PUT', '/api/articles/' . $article->id, $payload, $headers)
            ->assertStatus(200)
            ->assertJson([ 
                'id' => 1, 
                'title' => 'Lorem', 
                'body' => 'Ipsum' 
            ]);
    }

    public function testsArtilcesAreDeletedCorrectly()
    {
        $user = factory(User::class)->create();
        $token = $user->generateToken();
        $headers = ['Authorization' => "Bearer $token"];
        $article = factory(Article::class)->create([
            'title' => 'First Article',
            'body' => 'First Body',
        ]);

        $this->json('DELETE', '/api/articles/' . $article->id, [], $headers)
            ->assertStatus(204);
    }

    public function testArticlesAreListedCorrectly()
    {
        factory(Article::class)->create([
            'title' => 'First Article',
            'body' => 'First Body'
        ]);

        factory(Article::class)->create([
            'title' => 'Second Article',
            'body' => 'Second Body'
        ]);

        $user = factory(User::class)->create();
        $token = $user->generateToken();
        $headers = ['Authorization' => "Bearer $token"];

        $response = $this->json('GET', '/api/articles', [], $headers)
            ->assertStatus(200)
            ->assertJson([
                [ 'title' => 'First Article', 'body' => 'First Body' ],
                [ 'title' => 'Second Article', 'body' => 'Second Body' ]
            ])
            ->assertJsonStructure([
                '*' => ['id', 'body', 'title', 'created_at', 'updated_at'],
            ]);
    }
*/
}