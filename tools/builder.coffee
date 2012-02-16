util = require 'util'
fs = require 'fs'
path = require 'path'

class Builder

  COMMAND_PATH: "#{__dirname}/build_commands"

  constructor: ->

  run: (arguments)->
    c = @extractCommandToExecute arguments
    @tryExecuteCommand c

  extractCommandToExecute: (arguments) ->
    name = arguments[0]||'list'
    args = arguments?.slice(1)||[]

    return name:name, arguments:args

  tryExecuteCommand: (command)->
    try
      @executeCommand command
    catch error
      

  executeCommand: (command)->

    if command.name is 'list'
      @executeListCommand()
    else
      commandFile = @getCommandFilePath command.name
      
      commandModule = @loadCommand commandFile
      commandModule.executor.execute command.arguments

  getCommandFilePath: (name) -> "#{@COMMAND_PATH}/#{name}"

  executeListCommand: ->
    
    fs.readdir @COMMAND_PATH, (err,files) =>
      
      if err
      else
        console.log 'Available Commands:\n'
        @describeCommand commandFile for commandFile in files when @isCommand commandFile
      
  isCommand: (file) -> 
    switch path.extname(file).toLowerCase()
      when '.coffee' then true
      when '.js' then true
    
  describeCommand: (commandFile) ->
    c = @loadCommand commandFile
    console.log "#{c.name}\n#{c.description}\n"

  loadCommand: (commandFile)->
    
     name = @getFileNameWithoutExtension(commandFile)
     
     command = require "#{@COMMAND_PATH}/#{name}"
     description = command.description ? ""

     return executor:command, name:name, description:description

  getFileNameWithoutExtension: (fileName) -> path.basename( fileName, path.extname(fileName))

module.exports = new Builder()