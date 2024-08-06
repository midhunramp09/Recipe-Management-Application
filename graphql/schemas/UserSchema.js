const { gql } = require('graphql-tag');

const userSchema = gql`
  type User {
    username: String!
    password: String!
  }

  type Query {
    authenticateUser(username: String!, password: String!): Boolean
  }
`;

module.exports = userSchema;
