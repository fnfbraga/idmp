import { ApolloServer, gql } from "apollo-server";
import { neo4j_db, neo4j_password, neo4j_user } from "../config";
const { Neo4jGraphQL } = require("@neo4j/graphql");
import neo4j from "neo4j-driver";
import { typeDefs } from "../graphql/types";

export default () => {
	const driver = neo4j.driver(neo4j_db, neo4j.auth.basic(neo4j_user, neo4j_password));

	const neoSchema = new Neo4jGraphQL({
		typeDefs,
		driver,
		config: {
			enableRegex: true,
		},
	});

	const server = new ApolloServer({
		schema: neoSchema.schema,
	});

	server.listen().then(({ url }: any) => {
		console.log(`🚀  Server ready at ${url}`);
	});
};
