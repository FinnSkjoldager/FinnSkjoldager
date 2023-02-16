<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\SendMail;


class SendMailController extends Controller
{
    // https://www.twilio.com/blog/send-emails-laravel-8-gmail-smtp-server
     public function send(Request $request)
    {
       try {   
 $details = [
        'title' => 'Mail FINN TESTER',
        'body' => 'Spændende om det virker'
    ];
    abort(202);

        \Mail::to('finn.skjold@gmail.com')->send(new SendMail($details));
         } catch (Throwable $e) {
        printf($e);
 
    }
        return response()->json([
            "status" => true,
            "message" => "Besoeg Added."
        ], 201);
   
    /*
Route::get('/send-mail', function () {
    $details = [
        'title' => 'Mail FINN TESTER',
        'body' => 'Spændende om det virker'
    ];
    \Mail::to('finn.skjold@gmail.com')->send(new SendMail($details));
    dd("Email is Sent.");
});

        $besoeg = new Besoeg;
        $besoeg = $this->mapRequestBesoeg($request, $besoeg);
        $besoeg->save();
    */
    }
}
