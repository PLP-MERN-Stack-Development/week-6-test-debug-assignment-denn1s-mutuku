import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "@/components/LoginForm";
import { describe, it, expect, vi } from "vitest";

describe("LoginForm", () => {
  it("submits the form with correct credentials", () => {
    const mockLogin = vi.fn();
    render(<LoginForm onLogin={mockLogin} />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "user@test.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "secret" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(mockLogin).toHaveBeenCalledWith({
      email: "user@test.com",
      password: "secret",
    });
  });
});
