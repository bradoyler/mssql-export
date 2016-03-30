var myConfig = require('../config.json').mssql;
var MSSQLExport = require('./../index');
var sqlExport = new MSSQLExport(myConfig);

sqlExport.queryExport("select 1 as row, 'world' as hello", function (err, records) {
    if(err) {
        return console.error(err);
    }
    console.log(records);
});
