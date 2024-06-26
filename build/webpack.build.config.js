const path = require("path");
const webpack = require("webpack");
const utils = require("./utils");
const version = require("../package.json").version;
const banner =
	"/**\n" +
	" * vue-form-generator v" +
	version +
	"\n" +
	" * https://github.com/vue-generators/vue-form-generator/\n" +
	" * Released under the MIT License.\n" +
	" */\n";
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const StatsPlugin = require("stats-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const vueLoaderConfig = require("./vue-loader.conf");

let rules = [
	{
		test: /\.(js|vue)$/,
		loader: "eslint-loader",
		enforce: "pre",
		include: [path.resolve("src")],
		options: {
			formatter: require("eslint-friendly-formatter")
		}
	},
	{
		test: /\.(scss|css)$/i,
		use: [MiniCssExtractPlugin.loader, "css-loader"],
	},
	{
		test: /\.vue$/,
		loader: "vue-loader",
		include: [path.resolve("src")],
		exclude: /node_modules/,
		options: vueLoaderConfig
	},
	{
		test: /\.js$/,
		loader: "babel-loader",
		include: [path.resolve("src")],
		exclude: /node_modules/
	},
	{
		test: /\.(woff2?|svg)$/,
		loader: "url-loader",
		include: [path.resolve("src")]
	},
	{
		test: /\.(ttf|eot)$/,
		loader: "url-loader",
		include: [path.resolve("src")]
	}
];

let cssFileName;
if (process.env.FULL_BUNDLE !== "false") {
	cssFileName = "vfg.css";
} else {
	cssFileName = "vfg-core.css";
}

module.exports = [
	{
		entry: "./src/index.js",
		output: {
			path: path.resolve("dist"),
			filename: "vfg.js",
			library: "VueFormGenerator",
			libraryTarget: "umd"
		},

		plugins: [
			new webpack.DefinePlugin({
				"process.env": {
					NODE_ENV: JSON.stringify("production")
				}
			}),
			new LodashModuleReplacementPlugin({
				collections: true,
				paths: true,
			}),
			new MiniCssExtractPlugin({filename: cssFileName}),
			new ESLintPlugin({})
		],

		module: { rules },

		resolve: {
			aliasFields: ["browser"],
			extensions: [".js", ".vue", ".json"],
			alias: {
				vue$: "vue/dist/vue.esm.js",
				"@": path.resolve("src")
			}
		}
	}
];
