var db = require('../baseDeDatos/db');

exports.getPersons = function(req, resp){
    db.executeSQL("select TOP 10 BusinessEntityID,PersonType,convert(int,NameStyle)NameStyle,Title,FirstName,MiddleName,LastName,Suffix,EmailPromotion,convert (varchar(max),AdditionalContactInfo)AdditionalContactInfo,convert (varchar(max),Demographics)Demographics,rowguid,ModifiedDate from AdventureWorks2017.Person.Person ORDER BY BusinessEntityID ",  function (data, err){
        if(err){
            console.log(err)
        }else{
           
            resp.json(data.recordset)
            
        }
    });
};



