const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const recipeApiLogics = require("./RecipeApiLogics");
const userApiLogics = require("./UserApiLogics");

const server = express();
const PORT = 5000;

server.use(cors());
server.use(bodyParser.json());

server.get("/recipes", recipeApiLogics.getAllRecipes);
server.get("/recipes/:id", recipeApiLogics.getRecipeById);
server.post("/recipes", recipeApiLogics.createRecipe);
server.put("/recipes/:id", recipeApiLogics.updateRecipe);
server.delete("/recipes/:id", recipeApiLogics.deleteRecipe);

server.post("/login", userApiLogics.authenticateUser);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
