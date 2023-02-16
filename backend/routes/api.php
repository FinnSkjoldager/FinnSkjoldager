<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BesoegController;
use App\Http\Controllers\MedlemController;
use App\Http\Controllers\OpslagController;
use App\Http\Controllers\CronJobController;
use App\Http\Controllers\TimeplanController;
use App\Http\Controllers\GoogleCalendarController;
use App\Http\Controllers\SendMailController;
use App\Http\Controllers\FacebookController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
*/
Route::get('/besoeg/getall',[BesoegController::class, 'index']);
Route::get('/besoeg/findid/{id}',[BesoegController::class, 'show']);
Route::post('/besoeg/new',[BesoegController::class, 'store']);
Route::put('/besoeg/update',[BesoegController::class, 'update']);
Route::delete('/besoeg/delete/{id}',[BesoegController::class, 'delete']);
Route::get('/besoeg/findmedlemid/{id}',[BesoegController::class, 'showmedlemmer']);
Route::post('/besoeg/medlem/new/{besoegid}/{medlemid}',[BesoegController::class, 'storemedlem']);
Route::delete('/besoeg/medlem/delete/{besoegid}/{medlemid}',[BesoegController::class, 'deletemedlem']);
Route::get('/medlem1/{id}',[MedlemController::class, 'show']);
Route::post('/medlem/new',[MedlemController::class, 'store']);
Route::get('/medlem/getmedlemmer',[MedlemController::class, 'index']);
Route::post("/medlem/new1",function(Request $request ){
    $data = $request ->json()->all();
    //dump($request ->json()->get("Firmanavn"))
    $json = json_decode($data[0]);
    return gettype($data).":".count($data).$json->fornavn;;
    return $data->get("Firmanavn").$json->fornavn;;
});
//http://localhost/api/besoeg/findmedlemid/1
Route::get('/opslag',[OpslagController::class, 'index']);
Route::get('/opslag/alive',[OpslagController::class, 'alive']);
Route::get('/opslag/getcvr/{search}',[OpslagController::class, 'getCVR']);
Route::get('/opslag/getadresse/{search}',[OpslagController::class, 'getAdresse']);
Route::get('/opslag/getscrap118/{search}',[OpslagController::class, 'getScrap118']);
//Route::get('/cronjob', [CronJobController::class, 'runcronjob']);
Route::get('/cronjob/show/{querytype}/{jobportal}', [CronJobController::class, 'showCronJob']);
//Route::resource('timeplan', TimeplanController::class);
Route::post('/timeplan', [TimeplanController::class, 'index']);
Route::get('/timeplan/create', [TimeplanController::class, 'create']);
Route::post('/timeplan/store', [TimeplanController::class, 'store']);
Route::get('/timeplan/show/{id}', [TimeplanController::class, 'show']);
Route::put('/timeplan/update', [TimeplanController::class, 'update']);
Route::delete('/timeplan/destroy/{id}', [TimeplanController::class, 'destroy']);
Route::get('/googlecalendar', [GoogleCalendarController::class,'index']);
Route::post('/send-mail',[SendMailController::class,'send']);
Route::get('/f',[FacebookController::class,'index']);




