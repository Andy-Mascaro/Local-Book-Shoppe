const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('works routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should add a new work', async () => {
    const res = await request(app).get('/works');
    expect(res.body.length).toEqual(1);
    const work = res.body.find((char) => char.id === '1');
    expect(work).toHaveProperty('author_id', '1');
    expect(work).toHaveProperty('book_id', '1');
  });
});
