@IF EXIST "%~dp0"\"node.exe" (
  "%~dp0"\"node.exe" "tools\bld.js" %*
) ELSE (
  node  "tools\bld.js" %*
)