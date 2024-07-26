import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RecipeDetailsPage from './RecipeDeatilsPage';

describe('RecipeDetailsPage', () => {
  const recipe = {
    title: 'Spaghetti Bolognese',
    category: 'Dinner',
    ingredients: ['Spaghetti', 'Ground beef', 'Tomato sauce'],
    instructions: ['Boil spaghetti', 'Cook beef', 'Mix with sauce'],
    date: '2024-07-23'
  };

  test('renders recipe details correctly', () => {
    render(
      <RecipeDetailsPage
        recipe={recipe}
        onEdit={() => {}}
        onDelete={() => {}}
        onBack={() => {}}
      />
    );

    expect(screen.getByText(/Recipe Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Title:/i)).toBeInTheDocument();
    expect(screen.getByText(recipe.title)).toBeInTheDocument();
    expect(screen.getByText(/Category:/i)).toBeInTheDocument();
    expect(screen.getByText(recipe.category)).toBeInTheDocument();
    expect(screen.getByText(/Ingredients:/i)).toBeInTheDocument();
    recipe.ingredients.forEach(ingredient => {
      expect(screen.getByText(ingredient)).toBeInTheDocument();
    });
    expect(screen.getByText(/Instructions:/i)).toBeInTheDocument();
    recipe.instructions.forEach(step => {
      expect(screen.getByText(step)).toBeInTheDocument();
    });
    expect(screen.getByText(/Date:/i)).toBeInTheDocument();
    expect(screen.getByText(recipe.date)).toBeInTheDocument();
  });

  test('calls onBack when "Back to List" button is clicked', () => {
    const onBack = jest.fn();
    render(
      <RecipeDetailsPage
        recipe={recipe}
        onEdit={() => {}}
        onDelete={() => {}}
        onBack={onBack}
      />
    );

    fireEvent.click(screen.getByText(/Back to List/i));
    expect(onBack).toHaveBeenCalled();
  });

  test('calls onEdit when "Edit" button is clicked', () => {
    const onEdit = jest.fn();
    render(
      <RecipeDetailsPage
        recipe={recipe}
        onEdit={onEdit}
        onDelete={() => {}}
        onBack={() => {}}
      />
    );

    fireEvent.click(screen.getByText(/Edit/i));
    expect(onEdit).toHaveBeenCalled();
  });

  test('calls onDelete when "Delete" button is clicked', () => {
    const onDelete = jest.fn();
    render(
      <RecipeDetailsPage
        recipe={recipe}
        onEdit={() => {}}
        onDelete={onDelete}
        onBack={() => {}}
      />
    );

    fireEvent.click(screen.getByText(/Delete/i));
    expect(onDelete).toHaveBeenCalled();
  });
});
