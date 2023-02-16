<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('besoeg', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('nr');
            $table->integer('postnummer');
            $table->string('besogsdato');
            $table->string('firmanavn');
            $table->string('gpspunkt');
            $table->string('adresse');
            $table->string('hjemmeside');
            $table->string('kontaktperson');
            $table->string('mailadresse');
            $table->string('telefonNr');
            $table->integer('uopfordretansog');
            $table->integer('ledigtjob');
            $table->string('kommentarer');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('besoeg');
    }
};
