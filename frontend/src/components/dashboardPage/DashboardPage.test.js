// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import DashboardPage from "./DashboardPage";

// test("renders Recipe Manager dashboard", async () => {
//   render(<DashboardPage />);

//   expect(screen.getByText(/Recipe Manager/i)).toBeInTheDocument();
//   expect(screen.getByText(/Add New Recipe/i)).toBeInTheDocument();
//   expect(screen.getByText(/Logout/i)).toBeInTheDocument();
//   expect(screen.getByText(/Recipe Dashboard/i)).toBeInTheDocument();

//   const categories = ["Breakfast", "Lunch", "Dinner", "Dessert"];
//   categories.forEach((category) => {
//     expect(screen.getByText(category)).toBeInTheDocument();
//   });

//   expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
//   expect(screen.getByText(/Clear Filter/i)).toBeInTheDocument();

//   // Waiting for recipes to load
//   await screen.findByText(/Pancakes/i);
//   expect(screen.getByText(/Chicken Salad/i)).toBeInTheDocument();
//   expect(screen.getByText(/Spaghetti/i)).toBeInTheDocument();
// });

// test("filters recipes by category", async () => {
//   render(<DashboardPage />);

//   // Wait for recipes to load
//   await screen.findByText(/Pancakes/i);

//   fireEvent.click(screen.getByText(/Lunch/i));

//   expect(screen.queryByText(/Pancakes/i)).not.toBeInTheDocument();
//   expect(screen.getByText(/Chicken Salad/i)).toBeInTheDocument();
// });

// test("searches for recipes", async () => {
//   render(<DashboardPage />);

//   // Wait for recipes to load
//   await screen.findByText(/Pancakes/i);

//   fireEvent.change(screen.getByPlaceholderText(/Search/i), {
//     target: { value: "Spaghetti" },
//   });

//   expect(screen.queryByText(/Pancakes/i)).not.toBeInTheDocument();
//   expect(screen.getByText(/Spaghetti/i)).toBeInTheDocument();
// });

// test("clears filters and shows all recipes", async () => {
//   render(<DashboardPage />);

//   // Wait for recipes to load
//   await screen.findByText(/Pancakes/i);

//   fireEvent.click(screen.getByText(/Lunch/i));
//   expect(screen.queryByText(/Pancakes/i)).not.toBeInTheDocument();

//   fireEvent.click(screen.getByText(/Clear Filters/i));

//   expect(screen.getByText(/Pancakes/i)).toBeInTheDocument();
//   expect(screen.getByText(/Chicken Salad/i)).toBeInTheDocument();
//   expect(screen.getByText(/Spaghetti/i)).toBeInTheDocument();
// });

// test("expands and collapses recipe item", async () => {
//   render(<DashboardPage />);

//   // Wait for recipes to load
//   await screen.findByText(/Pancakes/i);

//   const pancakeRecipe = screen.getByText(/Pancakes/i);
//   fireEvent.click(pancakeRecipe);

//   expect(screen.getByText(/Category: Breakfast/i)).toBeInTheDocument();

//   fireEvent.click(pancakeRecipe);

//   expect(screen.queryByText(/Category: Breakfast/i)).not.toBeInTheDocument();
// });


import { render, screen } from '@testing-library/react';
import DashboardPage from './DashboardPage';

test('renders learn react link', () => {
  render(<DashboardPage />);
});
