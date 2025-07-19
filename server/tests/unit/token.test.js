import { generateToken, verifyToken } from '../../utils/token.js';
import dotenv from 'dotenv';
dotenv.config();

test('should generate and verify token', () => {
  const fakeUser = { _id: 'abc123', email: 'test@example.com' };
  const token = generateToken(fakeUser);
  const decoded = verifyToken(token);
  expect(decoded.email).toBe(fakeUser.email);
});