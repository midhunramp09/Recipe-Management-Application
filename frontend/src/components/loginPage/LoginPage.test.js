import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('LoginPage Component', () => {
  test('renders the login page title', () => {
    render(<LoginPage />);
    const titleElement = screen.getByText(/Recipe Manager/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the username and password input fields', () => {
    render(<LoginPage />);
    const usernameInput = screen.getByLabelText(/Username/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('renders the login button', () => {
    render(<LoginPage />);
    const loginButton = screen.getByText(/Login/i);
    expect(loginButton).toBeInTheDocument();
  });

  test('renders the register link', () => {
    render(<LoginPage />);
    const registerLink = screen.getByText(/Register/i);
    expect(registerLink).toBeInTheDocument();
  });

  test('username input should accept text', () => {
    render(<LoginPage />);
    const usernameInput = screen.getByLabelText(/Username/i);
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    expect(usernameInput.value).toBe('testuser');
  });

  test('password input should accept text', () => {
    render(<LoginPage />);
    const passwordInput = screen.getByLabelText(/Password/i);
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    expect(passwordInput.value).toBe('testpassword');
  });

  test('login button should be clickable', () => {
    render(<LoginPage />);
    const loginButton = screen.getByText(/Login/i);
    fireEvent.click(loginButton);
    // You can add more assertions here to test specific click behaviors if needed
  });

  test('register link should redirect to register page', () => {
    render(<LoginPage />);
    const registerLink = screen.getByText(/Register/i);
    expect(registerLink.closest('a')).toHaveAttribute('href', '/register');
  });
});
