import eslintPluginPrettier from 'eslint-plugin-prettier';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';

export default [
    {
        files: ['**/*.ts', '**/*.js'],
        languageOptions: {
            parser: typescriptEslintParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': typescriptEslintPlugin,
            prettier: eslintPluginPrettier,
        },
        rules: {
            'prettier/prettier': ['error', { endOfLine: 'auto' }],
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
            'semi': ['error', 'always'],
        },
    },
];
