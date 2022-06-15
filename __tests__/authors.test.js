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
    expect(res.body.length).toEqual(5);
    const john = res.body.find((char) => char.id === '1');
    expect(john).toHaveProperty('first_name', 'John');
    expect(john).toHaveProperty('last_name', 'Grisham');
    expect(john).toHaveProperty('dob', 1955);
    expect(john).toHaveProperty('pob', 'Arkansas US');
  });
  afterAll(() => {
    pool.end();
  });
});
