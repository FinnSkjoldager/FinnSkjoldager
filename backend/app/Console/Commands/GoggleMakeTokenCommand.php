<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Http\Controllers\GoogleCalendarClient;
use App\Http\Controllers\GoogleCalendarController;


class GoggleMakeTokenCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:googlemaketoken';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

    $controller  = new GoogleCalendarController();

    $controller->getClient();
    $controller  = new GoogleCalendarClient();
       
        return Command::SUCCESS;
    }
}
