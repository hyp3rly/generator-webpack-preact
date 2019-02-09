/**
 * Typescript config for production, this file call in webpack.pro.js
 *
 * @see https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
 * @see https://www.typescriptlang.org/docs/handbook/compiler-options.html
 */

module.exports = function createTsconfigJson( answer ) {

    let tsJsonConf = {
        // https://www.typescriptlang.org/docs/handbook/compiler-options.html
        "compilerOptions": {
            "strict": true, /* Enable all strict type-checking options. */
            // "allowSyntheticDefaultImports": true,
            "sourceMap": true,
            "noImplicitAny": false,
            "removeComments": false,
            "preserveConstEnums": true,
            "target": "ES5", /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'. */
            "module": "commonjs", /* Specify module code generation: 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
            "rootDir": "./src", /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
            "outDir": "./dist", /* Redirect output structure to the directory. */
            "jsx": "react",
            "jsxFactory": "h",
            "allowJs": true,
            // "lib": [
            //     "es6",
            //     "dom"
            // ]
        },
        "include": [
            "src/*.ts",
            "src/*.tsx"
        ]
    }

    return tsJsonConf;
}