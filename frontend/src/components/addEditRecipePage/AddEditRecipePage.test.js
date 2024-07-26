// src/components/AddEditRecipePage.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddEditRecipePage from './AddEditRecipePage';

describe('AddEditRecipePage', () => {
  const mockOnSave = jest.fn();
  const mockOnCancel = jest.fn();

  test('renders the form with default values for adding a new recipe', () => {
    render(<AddEditRecipePage isEditing={false} onSave={mockOnSave} onCancel={mockOnCancel} />);

    expect(screen.getByText('Recipe Manager')).toBeInTheDocument();
    expect(screen.getByText('Add Recipe')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Recipe Title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Category')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Ingredients')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Instructions')).toBeInTheDocument();
  });

  test('triggers onCancel when Back to List button is clicked', () => {
    render(<AddEditRecipePage isEditing={false} onSave={mockOnSave} onCancel={mockOnCancel} />);
    fireEvent.click(screen.getByText('Back to List'));
    expect(mockOnCancel).toHaveBeenCalled();
  });

  test('triggers onSave with correct data when Save button is clicked', () => {
    render(<AddEditRecipePage isEditing={false} onSave={mockOnSave} onCancel={mockOnCancel} />);
    fireEvent.change(screen.getByPlaceholderText('Recipe Title'), { target: { value: 'New Recipe' } });
    fireEvent.change(screen.getByPlaceholderText('Category'), { target: { value: 'Dessert' } });
    fireEvent.change(screen.getByPlaceholderText('Ingredients'), { target: { value: 'Flour, Sugar' } });
    fireEvent.change(screen.getByPlaceholderText('Instructions'), { target: { value: 'Mix and bake' } });
    fireEvent.change(screen.getByLabelText('Date:'), { target: { value: '2024-07-23' } });

    fireEvent.click(screen.getByText('Save'));

    expect(mockOnSave).toHaveBeenCalledWith({
      title: 'New Recipe',
      category: 'Dessert',
      ingredients: 'Flour, Sugar',
      instructions: 'Mix and bake',
      date: '2024-07-23',
    });
  });
});
