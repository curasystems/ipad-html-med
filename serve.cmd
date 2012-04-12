@echo off
SETLOCAL

rem Parameters 
SET port=8888
SET Url=/

:ParsePort
if [%1]==[] goto EndParsePort
SET port=%1
:EndParsePort

:ParseUrl
if [%2]==[] goto EndParseUrl
SET url=%2
:EndParseUrl

:StartWebServer
start "WebServer@localhost:%port%" node %~dp0static_server.js %1
start http://localhost:%port%%url%
:EndWebServer