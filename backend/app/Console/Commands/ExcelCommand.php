<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use PhpOffice\PhpSpreadsheet\Reader\Xls;
use App\Models\Besoeg;

class ExcelCommand extends Command
{
    protected $signature = 'excel';
    protected $description = 'Command description';
    public function handle()
    {
        $this->loadExcel();
        return Command::SUCCESS;
    }
    
    function loadExcel(){
        $reader = new Xls();
        $spreadsheet = $reader->load("./excel/Virksomhedsbesog.xls");
        echo "Årstal".PHP_EOL;
       // Besoeg::deleteAll();
        $rep = Besoeg::all();
        foreach ($spreadsheet->getSheetNames() as $name) {
            //echo $name."<br>".PHP_EOL;
        }
        $worksheet = $spreadsheet->getSheetByName('2019');
        for ($row = 1; $row <= 4; ++$row) {
            $this->saveData($worksheet, $row);
        } 
    }

    function getValue($worksheet, $col, $row){
        return $worksheet->getCellByColumnAndRow($col, $row)->getValue(); 
    }
    function saveData($worksheet, $row){
        echo "CREATE BESOEG".PHP_EOL;
        $virk = new Besoeg();
        $virk->nr=(int)$this->getValue($worksheet, 1, $row);
        $date3 = new \DateTime('2000-01-01');
        //$virk->Besogsdato($date3);
        $virk->Besogsdato = '';
        $virk->Postnummer = (int)$this->getValue($worksheet, 4, $row);
        $virk->Firmanavn = $this->getValue($worksheet, 5, $row);
        $virk->Adresse = ($this->getValue($worksheet, 6, $row));
        $virk->GPSpunkt = ("GPS");
        //$virk->setHjemmeside($this->getValue($worksheet, 7, $row));
        $virk->Hjemmeside = ("ok");
        //$virk->setKontaktperson($this->getValue($worksheet, 8, $row));
        $virk->Kontaktperson = ("ok");
        $virk->MailAdresse = ($this->getValue($worksheet, 9, $row));
        $virk->TelefonNr = ($this->getValue($worksheet, 10, $row));
        $virk->Uopfordretansog = (1);
        //$virk->Ledigtjob = ($this->getValue($worksheet, 12, $row));
        $virk->Ledigtjob = 0;
        $kom = $this->getValue($worksheet, 13, $row);
        echo $kom.PHP_EOL;
        $kom = "";
        //if ($kom = null)$kom = "";
        $virk->Kommentarer = $kom;
        $virk->save();
    }
}
