import { render, screen } from '@testing-library/react';
import Hello from '../../components/Hello';

test('renders Hello component with name', () => {
  render(<Hello name="Dennis" />);
  expect(screen.getByText('Hello, Dennis!')).toBeInTheDocument();
});
