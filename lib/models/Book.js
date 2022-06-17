const pool = require('../utils/pool');

class Book {
  id;
  title;
  published;
  authors;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.published = row.published;
    this.authors = row.authors && row.authors;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, title FROM books');
    return rows.map((row) => new Book(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT books.*, COALESCE(json_agg(to_jsonb(authors))FILTER (WHERE authors.id IS NOT NULL), '[]') as authors FROM books LEFT JOIN works on books.id = works.book_id 
      LEFT JOIN authors on authors.id = works.author_id WHERE books.id = $1 GROUP BY books.id, authors.id`,
      [id]
    );
    if (!rows[0]) return null;
    return new Book(rows[0]);
  }

  static async insert({ title, published }) {
    const { rows } = await pool.query(
      'INSERT INTO books (title, publisher) VALUES ($1, $2) RETURNING *',
      [title, published]
    );
    return new Book(rows[0]);
  }
}

module.exports = { Book };
