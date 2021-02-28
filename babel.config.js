/* eslint global-require: off, import/no-extraneous-dependencies: off */
const developmentEnvironments = ['development', 'test']

module.exports = (api) => {
	// See docs about api at https://babeljs.io/docs/en/config-files#apicache
	api.env(developmentEnvironments)

	return {
		presets: [
			// @babel/preset-env will automatically target our browserslist targets
			require('@babel/preset-env'),
			require('@babel/preset-typescript')
		],
		plugins: [[require('@babel/plugin-proposal-class-properties'), { loose: true }]]
	}
}
