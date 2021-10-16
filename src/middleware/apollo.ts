import { Neo4jGraphQL } from "@neo4j/graphql";
import { ApolloServer } from "apollo-server";
import neo4j from "neo4j-driver";
import { neo4j_db, neo4j_password, neo4j_user } from "../config";
import typeDefs from "../graphql/schema";

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
