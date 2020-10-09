    
    // config for your database
exports.config = {
    user: 'WideWorldImporters',
    password: 'WideWorldImporters2020',
    server: 'localhost',
    database: 'WideWorldImporters',
    options: {
        encrypt: false,
       "enableArithAbort": true
        }
};

exports.webPort = 8000;
