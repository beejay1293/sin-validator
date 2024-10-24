import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('SIN Validator App', () => {
  test('renders title and input field', () => {
    render(<App />);
    expect(screen.getByText(/SIN Validator/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/123 456 789/i)).toBeInTheDocument();
  });

  test('validates a correct SIN', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/123 456 789/i);
    fireEvent.change(input, { target: { value: '046 454 286' } }); // Valid SIN
    fireEvent.click(screen.getByText(/Validate/i));
    expect(screen.getByText(/Valid ✅/i)).toBeInTheDocument();
  });

  test('validates an incorrect SIN', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/123 456 789/i);
    fireEvent.change(input, { target: { value: '046 454 296' } }); // Invalid SIN
    fireEvent.click(screen.getByText(/Validate/i));
    expect(screen.getByText(/Invalid ❌/i)).toBeInTheDocument();
  });

  test('formats SIN as user types', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/123 456 789/i) as HTMLInputElement; // Cast to HTMLInputElement
    fireEvent.change(input, { target: { value: '046454286' } });
    expect(input.value).toBe('046 454 286'); // Check for formatted value
  })
});
