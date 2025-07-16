import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login form', () => {
  render(<App />);
  const loginTitle = screen.getByText(/log in to exclusive/i);
  expect(loginTitle).toBeInTheDocument();
});

test('renders email input field', () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText(/email or phone number/i);
  expect(emailInput).toBeInTheDocument();
});

test('renders password input field', () => {
  render(<App />);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  expect(passwordInput).toBeInTheDocument();
});

test('renders login button', () => {
  render(<App />);
  const loginButton = screen.getByRole('button', { name: /log in/i });
  expect(loginButton).toBeInTheDocument();
});

test('renders forgot password link', () => {
  render(<App />);
  const forgotPasswordLink = screen.getByText(/forgot password/i);
  expect(forgotPasswordLink).toBeInTheDocument();
});
