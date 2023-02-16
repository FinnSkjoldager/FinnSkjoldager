<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Google\Service\Calendar;
use Google\Client;


class GoogleCalendarController extends Controller
{
  public function getClient()
    {
        $client = new Client();
        $client->setApplicationName('Google Calendar API PHP Quickstart');
        $client->setScopes('https://www.googleapis.com/auth/calendar.events.readonly');
        $client->setAuthConfig(__DIR__.'/credentials.json');
        $client->setAccessType('offline');
        $client->setPrompt('select_account consent');

        // Load previously authorized token from a file, if it exists.
        // The file token.json stores the user's access and refresh tokens, and is
        // created automatically when the authorization flow completes for the first
        // time.
        $tokenPath = __DIR__.'/token.json';
        if (file_exists($tokenPath)) {
            $accessToken = json_decode(file_get_contents($tokenPath), true);
            $client->setAccessToken($accessToken);
        }

        // If there is no previous token or it's expired.
        /*
        print_r("expired:".$client->isAccessTokenExpired());
        print_r("<br>refresh:".$client->getRefreshToken());
        print_r("<br>refresh:".$client->fetchAccessTokenWithRefreshToken($client->getRefreshToken()));
        die();
        */
        if ($client->isAccessTokenExpired()) {
            // Refresh the token if possible, else fetch a new one.
            if ($client->getRefreshToken()) {
                $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
            } else {
                // Request authorization from the user.
                $authUrl = $client->createAuthUrl();
                print_r("<br>Open the following link in your browser:<br>");
                print_r("<br>");
                print_r($authUrl);
                print_r("<br><br>");
                print 'Enter verification code: ';
                $authCode = trim(fgets(STDIN));
                // Exchange authorization code for an access token.
                $accessToken = $client->fetchAccessTokenWithAuthCode($authCode);
                $client->setAccessToken($accessToken);
                // Check to see if there was an error.
                if (array_key_exists('error', $accessToken)) {
                    throw new Exception(join(', ', $accessToken));
                }
            }
            // Save the token to a file.
            if (!file_exists(dirname($tokenPath))) {
                mkdir(dirname($tokenPath), 0700, true);
            }
            file_put_contents($tokenPath, json_encode($client->getAccessToken()));
        }
        return $client;
    }
     public function timeFormat($datetime)
     {
         return $datetime;
         $datetime = strtotime($datetime);
         return date('Y/m/d H:i', $datetime);
     }
     public function getEvent($event)
     {
         $myevent = new MyEvent();
         $myevent->description = $event->description;
         $myevent->start = $this->timeFormat($event->start->dateTime);
         $myevent->end = $this->timeFormat($event->end->dateTime);
         $myevent->location = $event->location;
         $myevent->summary = $event->summary;
         $myevent->creator_email = $event->creator->email;
         $myevent->htmllink = $event->htmlLink;
         $myevent->created = $this->timeFormat($event->created);
         $myevent->updated = $this->timeFormat($event->updated);
         $myevent->description = $event->description;
         $myevent->description = $event->description;
         $myevent->description = $event->description;
         return $myevent;
     }

     public function getGoogleCalendar()
     {
         // Get the API client and construct the service object.
         $client = $this->getClient();
         $service = new Calendar($client);
         // Print the next 10 events on the user's calendar.
         try {
             $calendarId = 'primary';
             $optParams = array(
                 'maxResults' => 10,
                 'orderBy' => 'startTime',
                 'singleEvents' => true,
                 'timeMin' => date('c'),
             );
             $results = $service->events->listEvents($calendarId, $optParams);
             return $events = $results->getItems();
         } catch(Exception $e) {
             // TODO(developer) - handle error appropriately
             echo 'Message: ' .$e->getMessage();
         }
     }
     public function index()
     {
         $return = array();
         $events = $this->getGoogleCalendar();
         if (empty($events)) {
             print "No upcoming events found.\n";
         } else {
             //print "Upcoming events:\n";
             foreach ($events as $event) {
                 $return[] = $this->getEvent($event);
             }
         }

         return response()->json($return);
     }
}
class MyEvent
{
    public $description;
    public $start;
    public $end;
    public $location;
    public $summary;
    public $creator_email;
    public $htmllink;
    public $created;
    public $updated;
}
