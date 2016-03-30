#!/usr/bin/env node

var program = require('commander');
var fs = require('fs');
var MSSQLExport = require('./../index');
var json2csv = require('json2csv');

program
    .arguments('<table>')
    .option('-o, --output <output>', 'The output file')
    .option('-c, --credentials <credentials>', 'Your credentials file')
    .option('-l, --limit <limit>', 'Row limit (TOP)')
    .action(function(table) {

        var limit = program.limit || '';
        console.log('## Table: %s >> %s', table, program.output);

        var credentialsFile = fs.readFileSync(program.credentials);
        var credentials = JSON.parse(credentialsFile);
        var sqlExport = new MSSQLExport(credentials.mssql);

        sqlExport.tableExport(table, limit, function (err, records) {

            json2csv({data: records}, function(err, csv) {
                if(err) {
                    throw new Error('CSV export: '+ err);
                }
                fs.writeFile(program.output, csv);
            });
        });

    }).parse(process.argv);