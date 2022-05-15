module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        'parser': 'babel-eslint',
        'ecmaVersion': 2020,
        'sourceType': 'module',
    },
    plugins: ['import', 'vue'],
    extends: ['plugin:vue/vue3-recommended'],
    rules: {
        semi: ['error', 'always'],
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
        ],
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],
        quotes: ['error', 'single', {
            'allowTemplateLiterals': true,
        }],
        'object-curly-spacing': [2, 'never'],
        'no-multiple-empty-lines': ['error', {max: 1}],
        'vue/multi-word-component-names': 'off',
        'vue/no-multi-spaces': ['error', {ignoreProperties: false}],
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
        }],
        'vue/script-indent': ['error', 4, {
            baseIndent: 1,
            switchCase: 1,
            ignores: [],
        }],
        'vue/max-attributes-per-line': ['error', {
            singleline: {max: 5},
            multiline: {max: 1},
        }],
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never',
        }],
    },
};
