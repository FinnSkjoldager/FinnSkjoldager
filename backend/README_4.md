# CronJob getJobindex
php artisan make:migration create_jobsearch
https://laravel.com/docs/5.0/schema
$table->string('name', 100);
$table->text('description');
php artisan migrate
php artisan make:model Jobsearch
php artisan make:migration update_jobsearch

# FacebookCrall
php artisan make:command FacebookCommand