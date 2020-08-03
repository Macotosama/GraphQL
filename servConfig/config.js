    
    // config for your database
exports.config = {
    user: 'adventure',
    password: 'adventure2020',
    server: 'localhost',
    database: 'AdventureWorks2017',
    options: {
        encrypt: false,
       "enableArithAbort": true
        }
};

exports.webPort = 8000;
