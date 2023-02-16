<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Medlem;

class MedlemController extends Controller
{
    public function index()
    {
        //var_dump(\DB::table('users')->toSql());
        //var_dump(Medlem::query()->toSql());
        //$medlemmer = Medlem::query()
        //->where('created_at', '<', now()->subYear())
        //->with('telefonddnr')
        //->orderBy('id', 'asc')
        //->limit(5)
        //->get()
        //->toSql();
        //select * from `medlem` where `telefonnr` is null
        //$medlemmer = \DB::table('medlem')->select('id','telefonnr','fornavn')->where('id',2)
            //->toSql();
          //  ->get();
        //SELECT telefonnr FROM medlem WHERE id = 1;
        //$medlemmer = \DB::table('medlem')->first();
        //var_dump($medlemmer);
        //dd($medlemmer);
        //echo $medlemmer;
        //return "<br>OK";
        //$medlemmer = Medlem::all();
        //\DB::enableQueryLog(); // Enable query log
        $medlemmer = Medlem::all();
        //dd(\DB::getQueryLog()); // Show results of log
        //var_dump(Medlem::all()->toSql());
        //dd($medlemmer = Medlem::all());
        //dd(\DB::getQueryLog());
        //return response()->json($medlemmer[0]);
        return response()->json($medlemmer);
    }

    public function store(Request $request)
    { 
        $data = $request ->json()->all();
        return gettype($data[0]);
        $json = json_decode($data[0]);
        $medlem = new Medlem();
        $medlem->fornavn = $json->fornavn;
        $medlem->efternavn = $json->efternavn;
        $medlem->save();
        return response()->json([
            "message" => "Medlem Added."
        ], 201);
    }

    public function show($id)
    {
        $medlem = Medlem::find($id);
        if(!empty($medlem))
        {
            return response()->json($medlem);
        }
        else
        {
            return response()->json([
                "message" => "Medlem not found"
            ], 404);
        }
    }

    public function update(Request $request, $id)
    {
        if (Books::where('id', $id)->exists()) {
            $book = Books::find($id);
            $book->name = is_null($request->name) ? $book->name : $request->name;
            $book->author = is_null($request->author) ? $book->author : $request->author;
            $book->publish_date = is_null($request->publish_date) ? $book->publish_date : $request->publish_date;
            $book->save();
            return response()->json([
                "message" => "Book Updated."
            ], 404);
        }else{
            return response()->json([
                "message" => "Book Not Found."
            ], 404);
        }
    }
}
