const pool = require('../utils/pool');

class Author {
  id;
  first_name;
  last_name;
  dob;
  pob;

  constructor(row) {
    this.id = row.id;
    this.first_name = row.first_name;
    this.last_name = row.last_name;
    this.dob = row.dob;
    this.pob = row.pob;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM authors');
    return rows.map((row) => new Author(row));
  }
}

module.exports = Author;
