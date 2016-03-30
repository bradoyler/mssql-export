# mssql-export

A node.js library (with CLI) to export MS-SQL table to CSV file

## Install CLI
```
npm install -g mssql-export
```

### Usage: mssql-export [options] <table>
```
  Options:
    -h, --help                       output usage information
    -o, --output <output>            The output file
    -c, --credentials <credentials>  Your credentials file
    -l, --limit <limit>              Row limit (TOP)
```

## Setup config

copy `config.example.json` >>  `/config.json` and input credentials


#### Test your config

 ```
 $ npm test
 ```

 (see `test` folder)

## TODOs:

- Add Mocha tests
