const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('authors routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should return a list of authors', async () => {
    const res = await request(app).get('/authors');
    expect(res.body.length).toEqual(2);
    const phil = res.body.find((char) => char.id === '2');
    expect(phil).toHaveProperty('first_name', 'Phil');
    expect(phil).toHaveProperty('last_name', 'Hartman');
    expect(phil).toHaveProperty('dob', 1952);
    expect(phil).toHaveProperty('pob', 'California');
  });
  afterAll(() => {
    pool.end();
  });
});
