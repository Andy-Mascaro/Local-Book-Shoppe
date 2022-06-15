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
    expect(res.body.length).toEqual(6);
    const book = res.body.find((char) => char.id === '1');
    expect(book).toHaveProperty('title', 'A TIME TO KILL');
  });

  it('should show author with book', async () => {
    const res = await request(app).get('/books/5');
    const book = {
      id: '4',
      title: 'PALE FIRE',
      published: 1962,
      authors: [
        {
          id: 4,
          dob: 1899,
          pob: 'Saint Petersburg',
          last_name: 'Nabokov',
          first_name: 'Vladimir',
        },
      ],
    };
    expect(res.body).toEqual(book);
  });
  afterAll(() => {
    pool.end();
  });
});
