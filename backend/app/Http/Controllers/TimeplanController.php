<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Timeplan;
use Carbon\Carbon;

class TimeplanController extends Controller
{
    public function index(Request $request)
    {
        return Timeplan::all();
    }
    public function create()
    {
        $ent = new Timeplan();
        $ent->text = "Aftale 1";
        $ent->start = Carbon::now();
        $ent->end = Carbon::now()->addHours(3);
        $ent->save();
        return "OK";
    }
    public function mapRequestToTimeplan(Request $request, Timeplan $ent)
    {
        if ($request->text != null)
            $ent->text = $request->text;
        $ent->start = $request->start;
        $ent->end = $request->end;
        return $ent;
    }
    public function store(Request $request)
    {
        $ent = new Timeplan();
        $ent = $this->mapRequestToTimeplan($request, $ent);
        $ent->save();
        return response()->json([
            "id" => $ent->id,
            "result" => "ok",
            "message" => "Timeplan Created."
        ], 200);
    }
    public function show($id)
    {
        $ent = Timeplan::find($id);
        if (!empty($ent)) {
            return response()->json($ent);
        } else {
            return response()->json([
                "message" => "Timeplan not found"
            ], 404);
        }
    }
    public function update(Request $request)
    {
        if (Timeplan::where('id', $request->id)->exists()) {
            $ent = Timeplan::find($request->id);
            $ent = $this->mapRequestToTimeplan($request, $ent);
            $ent->save();
            //$res = new BackendResult();
            return response()->json([
                "id" => -1,
                "result" => "ok",
                "message" => "Timeplan Updated."
            ], 200);
        } else {
            return response()->json([
                "id" => -1,
                "result" => "error",
                "message" => "Timeplan not found"
            ], 404);
        }
    }
    public function destroy($id)
    {
        $ent = Timeplan::find($id);
        if (!empty($ent)) {
            $ent->delete();
            return response()->json([
                "status" => true,
                "message" => "Timeplan deleted"
            ], 200);
        } else {
            return response()->json([
                "status" => false,
                "message" => "Timeplan not found"
            ], 404);
        }
    }
}
class BackendResult
{
    private $id = 0;
    private $result = "";
    private $message = "";
}
