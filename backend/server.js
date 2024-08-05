const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const recipeApiLogics = require("./RecipeApiLogics");
const userApiLogics = require("./UserApiLogics");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/recipes", recipeApiLogics.getAllRecipes);
app.get("/recipes/:id", recipeApiLogics.getRecipeById);
app.post("/recipes", recipeApiLogics.createRecipe);
app.put("/recipes/:id", recipeApiLogics.updateRecipe);
app.delete("/recipes/:id", recipeApiLogics.deleteRecipe);

app.post("/login", userApiLogics.authenticateUser);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
