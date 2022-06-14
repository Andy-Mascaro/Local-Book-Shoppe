const pool = require('../utils/pool');

class Book {
  id;
  title;
  published;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.published = row.published;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, title, published FROM books');
    return rows.map((row) => new Book(row));
  }
}

module.exports = Book;
