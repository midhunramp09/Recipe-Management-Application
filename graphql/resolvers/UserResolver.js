const axios = require('axios');
const { API_URL } = require('../Config');

const userResolver = {
  Query: {
    authenticateUser: async (_, { username, password }) => {
      try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        return response.data.authenticated;
      } catch (error) {
        return false;
      }
    }
  }
};

module.exports = userResolver;
