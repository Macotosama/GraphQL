var db = require('../baseDeDatos/db');

exports.getPersons = function(req, resp){
    db.executeSQL("select TOP 10 * from AdventureWorks2017.Person.Person ",  function (data, err){
        if(err){
            console.log(err)
        }else{
            resp.json(data)
        }
    });
};

