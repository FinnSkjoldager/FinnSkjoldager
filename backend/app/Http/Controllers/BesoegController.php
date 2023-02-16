<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Besoeg;
use App\Models\Medlem;

class BesoegController extends Controller
{
    public function index()
    {
        //$besoeg = Besoeg::all();
        //$besoeg = Besoeg::all()->sortDesc();
        //** Ascending
        //$besoeg = Besoeg::all()->sortBy("id");
        //** Descending
        //$besoeg = Besoeg::all()->sortByDesc("id");
        $besoeg = Besoeg::select('*')->get();
        $besoeg = $besoeg->sortByDesc('id');
        $besoeg = $besoeg->values()->all();
        return response()->json($besoeg);
    }

    public function show($id)
    {
        $besoeg = Besoeg::find($id);
        if(!empty($besoeg))
        {
            return response()->json($besoeg);
        }
        else
        {
            return response()->json([
                "message" => "Besoeg not found"
            ], 404);
        }
    }

    function mapRequestBesoeg(Request $request, Besoeg $besoeg){
        $besoeg->nr = is_null($request->nr) ? $besoeg->nr : $request->nr;
        $besoeg->postnummer = $request->postnummer;
        $besoeg->besogsdato = $request->besogsdato;
        $besoeg->firmanavn = $request->firmanavn;
        $besoeg->gpspunkt = $request->gpspunkt;
        $besoeg->adresse = $request->adresse;
        $besoeg->hjemmeside = $request->hjemmeside;
        $besoeg->kontaktperson = $request->kontaktperson;
        $besoeg->mailadresse = $request->mailadresse;
        $besoeg->telefonnr = $request->telefonnr;
        $besoeg->uopfordretansog = $request->uopfordretansog;
        $besoeg->ledigtjob = $request->ledigtjob;
        $besoeg->kommentarer = $request->kommentarer;
        $besoeg->nr = $request->nr;
        return $besoeg;
    }

    public function store(Request $request)
    {
        $besoeg = new Besoeg;
        $besoeg = $this->mapRequestBesoeg($request, $besoeg);
        $besoeg->save();
        return response()->json([
            "status" => true,
            "message" => "Besoeg Added."
        ], 201);
    }

    public function update(Request $request)
    {
        if (Besoeg::where('id', $request->id)->exists()) {
            $besoeg = Besoeg::find($request->id);
            $besoeg = $this->mapRequestBesoeg($request, $besoeg);
            $besoeg->save();
            return response()->json([
                "status" => true,
                "message" => "besoeg Updated."
            ], 200);
        }else{
            return response()->json([
                "status" => false,
                "message" => "besoeg Not Found."
            ], 404);
        }
    }
    public function delete($id_besoeg)
    {
        $besoeg = Besoeg::find($id_besoeg);
        if(!empty($besoeg))
        {
            $besoeg->delete();
            return response()->json([
                "status" => true,
                "message" => "Besoeg deleted"
            ], 200);
        }
        else
        {
            return response()->json([
                "status" => false,
                "message" => "Besoeg not found"
            ], 404);
        }
    }

    public function showmedlemmer($id)
    {
        $besoeg = Besoeg::find($id);
        if(!empty($besoeg))
        {
            return response()->json($besoeg->medlemmer);
        }
        else
        {
            return response()->json([
                "message" => "Besoeg not found"
            ], 404);
        }
    }
    
    public function storemedlem($id_besoeg, $id_medlem)
    {
        $besoeg = Besoeg::find($id_besoeg);
        $besoeg->medlemmer()->attach($id_medlem);
        //saveMany
        if(!empty($besoeg))
        {
            return response()->json([
                "message" => "Medlem add to Besoeg done"
            ], 200);
        }
        else
        {
            return response()->json([
                "message" => "Besoeg or Medlem not found"
            ], 404);
        }
    }
    public function deletemedlem($id_besoeg, $id_medlem)
    {
        $besoeg = Besoeg::find($id_besoeg);
        $besoeg->medlemmer()->detach($id_medlem);
        //saveMany
        if(!empty($besoeg))
        {
            return response()->json([
                "message" => "Medlem add to Besoeg done"
            ], 200);
        }
        else
        {
            return response()->json([
                "message" => "Besoeg og Medlem not found"
            ], 404);
        }
    }
}
