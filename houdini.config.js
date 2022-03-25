/** @type {import('houdini').ConfigFile} */
const config = {
	schemaPath: './schema.graphql',
	sourceGlob: 'src/**/*.svelte',
	module: 'esm',
	framework: 'kit',
	apiUrl: 'https://api.github.com/graphql',
	scalars: {
		URI: {
			type: 'string',
			marshal: (val) => val,
			unmarshal: (val) => val
		}
	}
};

export default config;
