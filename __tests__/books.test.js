const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should return a list of books', async () => {
    const res = await request(app).get('/books');
    expect(res.body.length).toEqual(1);
    const book = res.body.find((char) => char.id === '1');
    expect(book).toHaveProperty('title', 'Bob is great');
    expect(book).toHaveProperty('published', 2022);
  });
  afterAll(() => {
    pool.end();
  });
});
