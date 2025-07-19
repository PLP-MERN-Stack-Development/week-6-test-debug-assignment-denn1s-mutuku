// src/tests/unit/api.test.js
import { fetchData } from '@/lib/api';

global.fetch = vi.fn();

describe('fetchData', () => {
  it('returns data when fetch is successful', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ message: 'success' }),
    });

    const data = await fetchData('/api/test');
    expect(data).toEqual({ message: 'success' });
  });

  it('throws error when fetch fails', async () => {
    fetch.mockResolvedValueOnce({ ok: false });

    await expect(fetchData('/api/fail')).rejects.toThrow("Failed to fetch");
  });
});
