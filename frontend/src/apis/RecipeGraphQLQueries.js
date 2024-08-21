import { gql } from '@apollo/client';

export const GET_RECIPES = gql`
  query GetRecipes {
    recipes {
      id
      title
      category
      ingredients
      instructions
      date
    }
  }
`;

export const CREATE_RECIPE = gql`
  mutation CreateRecipe(
    $title: String!
    $category: String!
    $ingredients: [String!]!
    $instructions: [String!]!
    $date: String!
  ) {
    createRecipe(
      title: $title
      category: $category
      ingredients: $ingredients
      instructions: $instructions
      date: $date
    ) {
      id
      title
      category
      ingredients
      instructions
      date
    }
  }
`;

export const UPDATE_RECIPE = gql`
  mutation UpdateRecipe(
    $id: Int!
    $title: String
    $category: String
    $ingredients: [String]
    $instructions: [String]
    $date: String
  ) {
    updateRecipe(
      id: $id
      title: $title
      category: $category
      ingredients: $ingredients
      instructions: $instructions
      date: $date
    ) {
      id
      title
      category
      ingredients
      instructions
      date
    }
  }
`;

export const DELETE_RECIPE = gql`
  mutation DeleteRecipe($id: ID!) {
    deleteRecipe(id: $id)
  }
`;
