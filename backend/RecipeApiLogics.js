const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "recipe.json");

// Load initial data from JSON file
let recipes = JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));

// Get all recipes
const getAllRecipes = (req, res) => {
  res.json(recipes);
};

// Get a single recipe by ID
const getRecipeById = (req, res) => {
  const recipe = recipes.find((r) => r.id === req.params.id);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).send("Recipe not found");
  }
};

// Create a new recipe
const createRecipe = (req, res) => {
  const newRecipe = req.body;
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
};

// Update a recipe
const updateRecipe = (req, res) => {
  const updatedRecipe = req.body;
  const index = recipes.findIndex((r) => r.id === req.params.id);

  if (index !== -1) {
    recipes[index] = updatedRecipe;
    res.json(updatedRecipe);
  } else {
    res.status(404).send("Recipe not found");
  }
};

// Delete a recipe
const deleteRecipe = (req, res) => {
  recipes = recipes.filter((r) => r.id !== req.params.id);
  res.status(204).send();
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
