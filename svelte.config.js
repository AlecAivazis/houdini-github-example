import 'dotenv/config';
import houdini from 'houdini-preprocess';
import path from 'path';
import { replaceCodePlugin } from 'vite-plugin-replace';

export default {
	preprocess: [houdini()],

	kit: {
		vite: {
			resolve: {
				alias: {
					$houdini: path.resolve('.', '$houdini')
				}
			},
			server: {
				fs: {
					allow: ['.']
				}
			},
			plugins: [
				replaceCodePlugin({
					replacements: [
						{
							from: 'process.env.GITHUB_TOKEN',
							to: JSON.stringify(process.env.GITHUB_TOKEN)
						}
					]
				})
			]
		}
	}
};
