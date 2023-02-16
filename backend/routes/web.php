<?php

use Illuminate\Support\Facades\Route;
use App\View\Components\OpslagComponent;
use App\View\Components\CronJobComponent;
use App\View\Components\JobSearchComponent;
use App\View\Components\GoogleCalendarComponent;
use App\Traits\HttpClientTrait;
use App\Mail\SendMail;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/lavarel', function () {
    return view('welcome');
});
Route::get('/', function () {
    return redirect('index.html');
});
Route::get('/opslag0', function () {
    $el = "ok";
    return view('opslag', ['el' => $el]);
});
//Route::resource('opslag', OpslagComponent::class);
Route::get('/opslag/voreselforbrug', [OpslagComponent::class, 'VoresElForbrug']);
Route::get('/opslag/voreselforbrug/lastday/{days}', [OpslagComponent::class, 'VoresElForbrugLastDay']);
Route::get('/opslag/voreselforbrug/lastmonth', [OpslagComponent::class, 'VoresElForbrugLastMonth']);
Route::get('/opslag/voreselforbrug/lastyear', [OpslagComponent::class, 'VoresElForbrugLastYear']);
Route::get('/opslag/elspotprices/{region}',[OpslagComponent::class, 'elSpotPrices']);
Route::get('/send-mail0', function () {
    $details = [
        'title' => 'Mail FINN TESTER',
        'body' => 'Spændende om det virker'
    ];
    \Mail::to('finn.skjold@gmail.com')->send(new SendMail($details));
    dd("Email is Sent.");
});

Route::get('/cronjob/run', [CronJobComponent::class, 'runCronJob']);
//Route::get('/cronjob/show', [CronJobComponent::class, 'showCronJob']);
Route::get('/cronjob/delete', [CronJobComponent::class, 'deleteCronJob']);
Route::get('/jobindexsearch/{job}', [JobSearchComponent::class, 'getJobindex']);
Route::get('/jobcentersearch/{job}', [JobSearchComponent::class, 'getJobCenter']);
Route::any('{query}', function() { return redirect('/'); })->where('query', '.*');
