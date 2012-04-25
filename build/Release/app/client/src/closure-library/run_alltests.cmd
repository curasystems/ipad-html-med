@echo off
echo For the tests to run existing instances of chrome need to close. After pressing any key this script will close all existing chrome instances
echo  
pause
taskkill /f /im chrome.exe

call "%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe" --new-window --allow-file-access-from-files "file://%~dp0all_tests.html"