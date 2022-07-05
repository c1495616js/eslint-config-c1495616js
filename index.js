const lib = require('./lib');

module.exports = {
    extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        jest: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        }
    },
    plugins: ['simple-import-sort', 'import', 'tailwindcss', 'jest-dom', 'testing-library'],
    // override the default
    rules: lib,
    settings: {
        react: {
            version: 'detect'
        }
    }
}
