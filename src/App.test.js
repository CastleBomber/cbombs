import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio navigation trigger', () => {
  render(<App />);
  expect(
    screen.getByRole('button', { name: /open navigation/i }),
  ).toBeInTheDocument();
});
