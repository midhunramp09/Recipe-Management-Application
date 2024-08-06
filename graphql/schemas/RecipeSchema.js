const { gql } = require('graphql-tag');

const recipeSchema = gql`
  type Recipe {
    id: Int!
    title: String!
    category: String!
    ingredients: [String!]!
    instructions: [String!]!
    date: String!
  }

  type Query {
    recipes: [Recipe!]!
    recipe(id: Int!): Recipe
  }

  type Mutation {
    createRecipe(title: String!, category: String!, ingredients: [String!]!, instructions: [String!]!, date: String!): Recipe
    updateRecipe(id: Int!, title: String, category: String, ingredients: [String], instructions: [String], date: String): Recipe
    deleteRecipe(id: Int!): Boolean
  }
`;

module.exports = recipeSchema;
