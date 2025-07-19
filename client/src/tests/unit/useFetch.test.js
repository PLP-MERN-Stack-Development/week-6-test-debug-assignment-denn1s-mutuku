// src/tests/unit/useFetch.test.js
import { renderHook } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import useFetch from "../../../src/hooks/useFetch";
import { vi } from "vitest";

describe("useFetch hook", () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ foo: "bar" }),
      })
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("fetches and returns data", async () => {
    const { result } = renderHook(() => useFetch("/api/data"));

    await waitFor(() => {
      expect(result.current.data).toEqual({ foo: "bar" });
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(null);
    });
  });

  it("sets error when fetch fails", async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error("Fetch failed")));

    const { result } = renderHook(() => useFetch("/api/error"));

    await waitFor(() => {
      expect(result.current.data).toBe(null);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeInstanceOf(Error);
    });
  });
});
