import request from 'supertest';
import app from '../../app.js';

describe('Auth routes', () => {
  it('should sign up a new user', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send({ username: 'mutuku', email: 'mutuku@mail.com', password: '12345678' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('token');
  });

  it('should log in the user', async () => {
    await request(app)
      .post('/api/auth/signup')
      .send({ username: 'john', email: 'john@mail.com', password: '123456' });

    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'john@mail.com', password: '123456' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});
