file = require 'file'
fs = require 'fs'
path  = require 'path'

class FileHelper

  @copyDirSync: (from, to, ignore) ->

    helper = new FileHelper()
    helper.copyDirSyncRecursive from, to, (file) -> file in ignore

  @removeDirSync: (from, to, ignore) ->

    helper = new FileHelper()
    helper.copyDirSyncRecursive from, to, (file) -> file in ignore

  copyDirSyncRecursive: (sourceDir, newDirLocation, shouldIgnoreThisFile) ->

    if !path.existsSync sourceDir
      console.log "Could not copy source. Does not exists at #{sourceDir}"
      return

    if path.existsSync newDirLocation
      try 
        @rmdirSyncRecursive(newDirLocation) if fs.statSync(newDirLocation).isDirectory()
      catch err
        # ignore

    checkDir = fs.statSync sourceDir
    fs.mkdirSync newDirLocation, checkDir.mode

    for f in fs.readdirSync(sourceDir)
        
      if shouldIgnoreThisFile
        if shouldIgnoreThisFile(f)
          continue

      sourcePath = path.join sourceDir, f
      targetPath = path.join newDirLocation, f
      currFile = fs.lstatSync(sourcePath)

      if currFile.isDirectory()          
        @copyDirSyncRecursive sourcePath, targetPath
      else if currFile.isSymbolicLink()
        symlinkFull = fs.readlinkSync sourcePath
        fs.symlinkSync symlinkFull, targetPath
      else 
        src = fs.createReadStream sourcePath
        src.pipe fs.createWriteStream targetPath
    
  rmdirSyncRecursive: (dirPath, failSilent = false) ->

    try 
        files = fs.readdirSync dirPath
    catch err
        return if failSilent
        throw new Error(err.message)
    
    for f in files
      filePath = path.join dirPath, f
      currFile = fs.lstatSync filePath

      if currFile.isDirectory()            
        @rmdirSyncRecursive filePath
      else if currFile.isSymbolicLink()
        fs.unlinkSync filePath
      else
        fs.unlinkSync filePath
    
    try
      fs.rmdirSync dirPath  
    catch error
      # console.log "Could not delete #{dirPath}. Error:#{error}"
    
module.exports.copyDirSync = FileHelper.copyDirSync
module.exports.removeDirSync = FileHelper.removeDirSync