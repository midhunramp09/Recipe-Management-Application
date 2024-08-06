const axios = require('axios');
const { API_URL } = require('../Config');

const recipeResolver = {
  Query: {
    recipes: async () => {
      const response = await axios.get(`${API_URL}/recipes`);
      return response.data;
    },
    recipe: async (_, { id }) => {
      const response = await axios.get(`${API_URL}/recipes/${id}`);
      return response.data;
    }
  },
  Mutation: {
    createRecipe: async (_, { title, category, ingredients, instructions, date }) => {
      const response = await axios.post(`${API_URL}/recipes`, { title, category, ingredients, instructions, date });
      return response.data;
    },
    updateRecipe: async (_, { id, title, category, ingredients, instructions, date }) => {
      const response = await axios.put(`${API_URL}/recipes/${id}`, { id, title, category, ingredients, instructions, date });
      return response.data;
    },
    deleteRecipe: async (_, { id }) => {
      await axios.delete(`${API_URL}/recipes/${id}`);
      return true;
    }
  }
};

module.exports = recipeResolver;
