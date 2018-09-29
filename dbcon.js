var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_pfingstr',
  password        : '0207',
  database        : 'cs290_pfingstr'
});

module.exports.pool = pool;
