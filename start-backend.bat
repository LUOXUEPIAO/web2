@echo off  
echo ****************************************  
echo Start run backend  
echo ****************************************  

set LogFolder=\backend\log 
set LogSuffix=%date:~0,4%%date:~5,2%%date:~8,2%%time:~0,2%%time:~3,2%%time:~6,2%
set "LogSuffix=%LogSuffix: =0%"
 
echo %cd%%LogFolder%
if exist %cd%%LogFolder%(
  echo  log folder exist: %cd%%LogFolder%
)else (
  echo add log folder %cd%%LogFolder%
  md %cd%%LogFolder%
)

cd backend
node app.js >> log\server-%LogSuffix%.log

