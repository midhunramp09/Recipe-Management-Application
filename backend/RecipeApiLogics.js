const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "public", "recipes.json");

let recipes = JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));

const generateId = () => {
  if (recipes.length === 0) {
    return 1;
  } else {
    const newId = Math.max(...recipes.map((r) => r.id)) + 1;
    return newId;
  }
};

const getAllRecipes = (req, res) => {
  res.json(recipes);
};

const getRecipeById = (req, res) => {
  const recipe = recipes.find((r) => r.id === parseInt(req.params.id, 10));
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).send("Recipe not found");
  }
};

const createRecipe = (req, res) => {
  const newRecipe = { ...req.body };
  newRecipe.id = generateId();
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
};

const updateRecipe = (req, res) => {
  const updatedRecipe = req.body;
  const index = recipes.findIndex((r) => r.id === parseInt(req.params.id, 10));

  if (index !== -1) {
    recipes[index] = updatedRecipe;
    res.json(updatedRecipe);
  } else {
    res.status(404).send("Recipe not found");
  }
};

const deleteRecipe = (req, res) => {
  const id = parseInt(req.params.id, 10);
  recipes = recipes.filter((r) => r.id !== id);
  res.status(204).send();
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
