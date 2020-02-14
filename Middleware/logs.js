const winston=require('winston')
module.exports=function(){
    winston.add(winston.transports.File,{filename:"logfile.log"})
    // winston.add(winston.transports.MongoDB,{db:UR.DB_URL,
    // level:'info'
    // })
    winston.handleExceptions(
        new winston.transports.Console({colorize: true, prettyPrint:true}),
        new winston.transports.File({filename:'uncaughtException.log'}))
    
    process.on('unhandledRejection',(ex)=>{
       throw ex;
    })
}