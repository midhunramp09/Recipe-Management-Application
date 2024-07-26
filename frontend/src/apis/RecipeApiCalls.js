import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const getRecipes = () => axios.get(`${BASE_URL}/recipes`);
export const getRecipeById = (id) => axios.get(`${BASE_URL}/recipes/${id}`);
export const createRecipe = (recipe) =>
  axios.post(`${BASE_URL}/recipes`, recipe);
export const updateRecipe = (id, updatedRecipe) =>
  axios.put(`${BASE_URL}/recipes/${id}`, updatedRecipe);
export const deleteRecipe = (id) => axios.delete(`${BASE_URL}/recipes/${id}`);
