
var sqlSettings  = require('../servConfig/config');
var sqlDB = require('mssql');

exports.executeSQL = function(sql,response){
    var connetion = new sqlDB.ConnectionPool(sqlSettings.config);
    connetion.connect()
     .then(function(){
         var req = new sqlDB.Request(connetion);
         req.query(sql).then(function(recordset){
            response(recordset);
         })
         .catch(function(err){
            console.log(err);
            response(null,err);
         });
     })
     .catch(function(err){
         console.log(err);
         response(null,err);
     });
};

