import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import SignUp from './SignUp';

describe('SignUp', () => {
  it('renders the form with all input fields', async () => {
    render(<SignUp />);
    const firstNameInput = screen.getByPlaceholderText('First Name');
    // const emailInput = screen.getByPlaceholderText('Email');
    // const passwordInput = screen.getByPlaceholderText('Password');
    // const submitButton = screen.getByRole('button');
    await fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(screen.getByPlaceholderText('First Name')).toHaveTextContent('John');
    // expect(lastNameInput).toHaveValue('Doe');
    // expect(emailInput).toHaveValue('john.doe@example.com');
    // expect(passwordInput).toHaveValue('secret123');
  });
});