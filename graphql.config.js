// graphql.config.js
module.exports = {
	projects: {
		app: {
			schema: ["src/graphql/schema/enums.graphql", "src/graphql/schema/types.graphql"],
			documents: ["**/*.{graphql,js,ts,jsx,tsx}"],
		},
	},
};
