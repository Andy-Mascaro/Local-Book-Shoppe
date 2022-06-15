const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { Work } = require('../lib/models/Work');

describe('works routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should add a new work', async () => {
    const works = new Work({
      author_id: '5',
      book_id: '3',
      title: 'ONE DAY I WILL BE GREAT',
    });
    const res = await request(app).post('/works').send(works);
    expect(res.body.author_id).toEqual(works.author_id);
    expect(res.body.book_id).toEqual(works.book_id);
    expect(res.body.title).toEqual(works.title);
    const count = await Work.count();
    expect(count).toEqual(7);
  });
  afterAll(() => {
    pool.end();
  });
});
