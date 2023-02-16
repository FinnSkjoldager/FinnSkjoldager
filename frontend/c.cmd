echo on
rem "./c"
rem d:
rem cd D:\Virksomhedsgruppen_2\frontend
rem --build-optimizer --cross-origin --optimization
rem npm run build --prod
call ng build --output-hashing=all
rem call ng build
rem @echo off
set sti=C:\xampp\htdocs_f
echo Echo sti = %sti%
rem goto:eof
call copy dist\assets %sti%\public\assets
call copy dist %sti%\public
c:
cd %sti%
call copy app\index.php public\index.php
call copy app\.htaccess public\.htaccess