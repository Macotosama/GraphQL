    
    // config for your database
exports.config = {
    
    user: 'Base2017',
    password: 'base2017',
    server: 'DESKTOP-NALDKC8\\MSSQLSERVER01',
    database: 'BasePrimaria',
    options: {
        encrypt: false,
       "enableArithAbort": true
        }
};

exports.webPort = 8000;
