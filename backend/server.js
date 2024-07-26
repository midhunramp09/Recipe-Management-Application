const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const recipeApiLogics = require('./RecipeApiLogics');

const app = express();
const PORT = 5000;

// Use cors middleware to enable CORS
app.use(cors()); // Allow all origins by default

app.use(bodyParser.json());

// Define API routes
app.get('/recipes', recipeApiLogics.getAllRecipes);
app.get('/recipes/:id', recipeApiLogics.getRecipeById);
app.post('/recipes', recipeApiLogics.createRecipe);
app.put('/recipes/:id', recipeApiLogics.updateRecipe);
app.delete('/recipes/:id', recipeApiLogics.deleteRecipe);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
