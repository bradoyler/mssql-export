var sql = require('mssql');

var Db, config;

function mssqlExport(options) {

    if(!options.user || !options.password) {
        throw new Error('Missing user/password values');
    }

    config = options;
    Db = sql.connect(options);
}

function queryExport(sqlQuery, callback) {

    var query = sqlQuery;

    var errorHandler = function errorHandler(err) {
        callback(err);
    };

    Db.then(function() {

        new sql.Request().query(query).then(function(recordset) {

            callback(null, recordset);

        }).catch(errorHandler);

    }).catch(errorHandler);
}

function tableExport (table, limit, callback) {
    var top = '';
    if(limit) {
        top = 'TOP '+ limit;
    }

    var query =  "select "+ top +" * from "+ table;
    queryExport(query,callback);
}

mssqlExport.prototype.queryExport = queryExport;
mssqlExport.prototype.tableExport = tableExport;
module.exports = mssqlExport;

