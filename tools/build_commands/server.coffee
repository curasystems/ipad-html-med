http = require 'http'
server = require '../../server/server'

class DemoServerCommand

  title: 'Demo Server'
  description: 'Run a demoserver from ./server to provide readmodels and accept commands.'

  execute: (argv) ->
    
    s = new server.Server()    
    s.start()

module.exports = new DemoServerCommand()