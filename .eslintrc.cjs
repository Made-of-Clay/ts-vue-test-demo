module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        '@antfu',
        // 'plugin:vue/vue3-recommended',
        // "eslint:recommended",
        // "@vue/typescript/recommended",
        // 'prettier',
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 11,
    },
    rules: {
        'no-var': 'error',
        'quotes': ['error', 'single'],
        'indent': ['error', 4, { SwitchCase: 1 }],
        'semi': ['error', 'always'],
        '@typescript-eslint/semi': ['error', 'always'],
        'vue/max-len': [
            'error',
            {
                code: 120,
                template: 120,
                tabWidth: 4,
                comments: 120,
                ignorePattern: '',
                ignoreStrings: true,
            },
        ],
        // "@typescript-eslint/explicit-module-boundary-types": "off",
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: false,
                ignores: [],
            },
        ],
        'vue/component-tags-order': [
            'error',
            {
                order: [['script', 'template'], 'style'],
            },
        ],
        // not needed for vue 3
        'vue/no-multiple-template-root': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/brace-style': 'off',
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
    ],
};
