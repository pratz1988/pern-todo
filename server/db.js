const Pool = require("pg").Pool;

const pool = new Pool({
  user: "pratz",
  password: "pratz123",
  host: "localhost",
  port: 5432,
  databse: "perntodo",
});

module.exports = pool;
