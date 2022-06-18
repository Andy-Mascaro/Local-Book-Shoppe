const pool = require('../utils/pool');

class Author {
  id;
  first_name;
  last_name;
  dob;
  pob;
  books;

  constructor(row) {
    this.id = row.id;
    this.first_name = row.first_name;
    this.last_name = row.last_name;
    this.dob = row.dob;
    this.pob = row.pob;
    this.books = row.books && row.books;
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT id,first_name, last_name FROM authors'
    );
    return rows.map((row) => new Author(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT authors.*, COALESCE(json_agg(to_jsonb(books))FILTER (WHERE books.id IS NOT NULL), '[]') as books FROM authors LEFT JOIN works on authors.id = works.author_id 
      LEFT JOIN books on books.id = works.book_id WHERE authors.id = $1 GROUP BY authors.id, books.id`,
      [id]
    );
    if (!rows[0]) return null;
    return new Author(rows[0]);
  }

  static async insert({ first_name, last_name, dob, pob }) {
    const { rows } = await pool.query(
      'INSERT INTO authors (first_name, last_name, dob, pob) VALUES ($1, $2, $3, $4) RETURNING *',
      [first_name, last_name, dob, pob]
    );
    return new Author(rows[0]);
  }
}

module.exports = { Author };
