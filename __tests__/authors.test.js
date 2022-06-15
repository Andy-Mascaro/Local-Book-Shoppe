const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('authors routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should show author name', async () => {
    const res = await request(app).get('/authors');
    expect(res.body.length).toEqual(5);
    const john = res.body.find((char) => char.id === '1');
    expect(john).toHaveProperty('first_name', 'John');
    expect(john).toHaveProperty('last_name', 'Grisham');
  });

  it('should show author with book', async () => {
    const res = await request(app).get('/authors/1');
    const john = {
      id: '1',
      first_name: 'John',
      last_name: 'Grisham',
      dob: 1955,
      pob: 'Arkansas US',
      books: [
        {
          id: 1,
          title: 'A TIME TO KILL',
          published: 1989,
        },
      ],
    };
    expect(res.body).toEqual(john);
  });
  afterAll(() => {
    pool.end();
  });
});
