// var express = require('express');
// const bodyParser = require('body-parser')
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

// var app = express();


// app.get('/', function (req, res) {


//     var sql = require("mssql");
//     // config for your database
//     var config = {
//         user: 'adventure',
//         password: 'adventure2020',
//         server: 'localhost',
//         database: 'AdventureWorks2017',
//         options: {
//             encrypt: false,
//             "enableArithAbort": true
//             }
//     };


//     // connect to your database
//     sql.connect(config, function (res,err) {
//         if (err) console.log(err);
//         // create Request object
//         var request = new sql.Request();
//         // query to the database and get the records
//         request.query('select TOP 10 * from AdventureWorks2017.Person.Person ', function (err, recordset) {
//         if (err) console.log(err)
//             // send records as a response
//             res.json(recordset);
//         });
//     });
// });


// var server = app.listen(5000, function () {
//     console.log('Server is running..');


//});