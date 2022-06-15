const pool = require('../utils/pool');

class Work {
  id;
  author_id;
  book_id;
  constructor(row) {
    this.id = row.id;
    this.author_id = row.author_id;
    this.book_id = row.book_id;
  }

  static async count() {
    const { rows } = await pool.query('SELECT COUNT (*) FROM works');
    return Number(rows[0].count);
  }

  static async insert({ author_id, book_id }) {
    const { rows } = await pool.query(
      'INSERT INTO works (author_id, book_id) VALUES ($1, $2) RETURNING *',
      [author_id, book_id]
    );
    return new Work(rows[0]);
  }
}
module.exports = { Work };
