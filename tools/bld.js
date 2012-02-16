require('coffee-script');

main = function(arguments){ 

  debugger;
   
  var buildArguments = arguments.slice(2);

  var builder = require('./builder'); 
  builder.run(buildArguments);

}

main(process.argv);
