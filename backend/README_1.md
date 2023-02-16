# Opslag service
php artisan serve
# create service
php artisan make:controller OpslagController --resource
# create test
php artisan make:test OpslagTest
# run test
php artisan test --filter OpslagTest
# http client code
https://laravel.com/docs/9.x/http-client
composer require guzzlehttp/guzzle
https://curl.haxx.se/docs/caextract.html
php.ini  curl.cainfo = "C:\wamp\bin\php\certs\cacert.pem"
extension=openssl
# Web Scraping for Laravel
composer require roach-php/laravel
https://roach-php.dev/docs/spiders
# web resources/views/opslag.blade.php
php artisan make:component OpslagComponent
# EL overblik
https://api.eloverblik.dk/CustomerApi/index.html
https://www.energidataservice.dk/search?q=price
https://api.energidataservice.dk/dataset/DatahubPricelist?limit=5
https://api.energidataservice.dk/meta/dataset/Elspotprices
https://api.energidataservice.dk/dataset/Elspotprices?limit=5

php artisan make:mail SendMail
https://www.itsolutionstuff.com/post/laravel-8-mail-laravel-8-send-email-tutorialexample.html
https://www.hostinger.com/tutorials/how-to-use-free-google-smtp-server

# 
php artisan cache:clear 
php artisan config:clear
php artisan view:clear
/bootstrap/cache/packages.php
/storage/framework/cache
# after delete /storage/
# laravel RuntimeException('View path not found.')
composer update
# laravel
# screentest Laravel E-Fire.dk
https://laravel.karlsminde1.dk/ VIRKER
copy to
l.finnskjold.dk  VIRKER IKK
D:\FinnSkjold\one_laravel_test
https://ff.karlsminde1.dk/home1 VIRKER dog ikke getmedlemmer
# symfony
https://aa.karlsminde1.dk/home1

https://www.youtube.com/watch?v=0zpgNEar4Mo

# migrate create table
php artisan make:migration create_medlem_table
php artisan migrate

# MySQL cache 
FLUSH TABLES;
# Apache cache
# SQL debug
App\Http\Controllers\MedlemController

<FilesMatch "\.(html|htm|js|css)$">
  FileETag None
  <IfModule mod_headers.c>
    Header unset ETag
    Header set Cache-Control "max-age=0, no-cache, no-store, must-revalidate"
    Header set Pragma "no-cache"
    Header set Expires "Wed, 12 Jan 1980 05:00:00 GMT"
  </IfModule>
</FilesMatch>
https://github.com/cmate5614530/inventory-management
https://www.simply.com/dk/support/faq/php/27/
https://www.elated.com/mod-rewrite-tutorial-for-absolute-beginners/
