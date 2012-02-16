curaapp Source Code
===================

The curaapp source is an HTML application. This means it consists of one single main html page without requiring a server to serve up generated html. 

The main html page is pretty empty and called index.html. There are a number of variants of index.html for debug,release and development versions.

All pages reference the main javascript file main.js. main.js resembles the start of the application just like main in a standard application would.

main.js
-------
main.js is being generated by the [Google Closure Compiler][gc]. The google closure compiler takes a javascript files and all related files and optimizes and minimizes them into a single file if required.

[gc]: http://code.google.com/closure/compiler/

In order to interact with the Google Closure Compiler we use [plovr][pl]. Plovr is a single jar file which acts as an intermediary to the Google Closure Compiler. Is also offers a number of nice features on top, such as an embedded http server serving up compiled js files at runtime (live development) as well as coffee and jstest support (Google Closure Library contains JSTests).

[pl]: http://plovr.com


Folder structure
----------------

  * src
  	All Javascript (and coffescript) source files compiled with the google closure compiler (plovr)
    Note: This folder is NOT copied into the output
    Note: soyutils_usegoog.js is taken from (http://code.google.com/p/closure-templates/source/browse/trunk/javascript/soyutils_usegoog.js) 
    It is required in order for plovr to compile soys. This is included by default, but when overriding the closure library path the soyutils_usegoog.js file is required.

  * scripts
    All additional javascript files not compiled
  * css
  	All CSS and LESS files
  * fonts
    All fonts required by the stylesheets
    

Editor Settings
===============

Indentation
-----------

Use spaces as tabs
And indent with 2 spaces 

(Note: In Sublime Just set it in the Default File Settings)

Line Endings
------------

All code is checked in with UNIX line endings and editted locally in whatever git is set to check out. 


Gradle
======

We use gradle as build system. 

Note: Set GRADLE_USER_HOME
 