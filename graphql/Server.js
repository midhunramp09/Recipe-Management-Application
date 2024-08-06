const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const recipeSchema = require('./schemas/RecipeSchema');
const userSchema = require('./schemas/UserSchema');
const recipeResolver = require('./resolvers/RecipeResolver');
const userResolver = require('./resolvers/UserResolver');

const typeDefs = [recipeSchema, userSchema];
const resolvers = [recipeResolver, userResolver];
const port = 4000;

let server = new ApolloServer({
    typeDefs,
    resolvers
});

startStandaloneServer(server, {
    listen: { port: port }
})
.then(({ url }) => console.log(`GraphQL server started at ${url}`));
