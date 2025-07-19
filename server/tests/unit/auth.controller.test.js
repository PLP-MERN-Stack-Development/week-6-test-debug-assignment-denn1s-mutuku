import { signup, login } from '../../controllers/auth.controller.js';
import User from '../../models/User.js';
import httpMocks from 'node-mocks-http';

vi.mock('../../models/User.js');

test('signup should return 201 with user and token', async () => {
  const req = httpMocks.createRequest({
    method: 'POST',
    body: { username: 'dennis', email: 'dennis@mail.com', password: '123456' },
  });
  const res = httpMocks.createResponse();

  User.create.mockResolvedValue({ _id: '1', email: 'dennis@mail.com' });

  await signup(req, res);
  expect(res.statusCode).toBe(201);
});
