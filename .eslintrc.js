module.exports = {
	root: true,
	parser: "vue-eslint-parser",
	parserOptions: {
		sourceType: "module",
		parser: "babel-eslint"
	},
	env: {
		browser: true,
		commonjs: true
	},
	globals: {
		process: true
	},
	extends: [
		"eslint:recommended"
		// "plugin:vue/essential"
	],
	plugins: ["prettier"],
	rules: {
		indent: "off",
		quotes: [1, "double", { allowTemplateLiterals: true }],
		semi: [2, "always"],
		"no-var": "warn",
		"no-console": [0],
		"no-redeclare": "warn",
		"no-unused-vars": "warn",
		"no-prototype-builtins": "warn",
		"no-undef": "warn",
		"no-throw-literal": 0,
		eqeqeq: [2, "smart"]
	}
};
