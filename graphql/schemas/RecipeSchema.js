const { gql } = require('graphql-tag');

const recipeSchema = gql`
  type Recipe {
    id: ID!
    title: String!
    category: String!
    ingredients: [String!]!
    instructions: [String!]!
    date: String!
  }

  type Query {
    recipes: [Recipe!]!
    recipe(id: ID!): Recipe
  }

  type Mutation {
    createRecipe(title: String!, category: String!, ingredients: [String!]!, instructions: [String!]!, date: String!): Recipe
    updateRecipe(id: ID!, title: String, category: String, ingredients: [String], instructions: [String], date: String): Recipe
    deleteRecipe(id: ID!): Boolean
  }
`;

module.exports = recipeSchema;
