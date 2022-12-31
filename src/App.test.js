import { render, screen } from '@testing-library/react';
import Weather from './Weather';
import Weather from './Weather.css';

test('renders learn react link', () => {
  render(<Weather/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
