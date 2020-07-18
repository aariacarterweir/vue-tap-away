module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'airbnb-base',
    ],
    globals: {
        // vendor:
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        Hammer: false,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        parser: 'babel-eslint',
    },
    rules: {
        // eslint require 2 spaces. We agree to use 4 for consistency with PHP.
        indent: ['error', 4],
        // eslint enforce parenthesis for single argument in arrow functions.
        // We agree to omit them for single arguments.
        'arrow-parens': 'off',
        'no-underscore-dangle': [
            'error', {
                "allow": ["_this"],
                "allowAfterThis": true
            }
        ],
        "no-unused-expressions": [
            "error", {
                "allowTernary": true
            }
        ],
        // We prefer: (! true)  over: (!true) for readability.
        'space-unary-ops': [
            2, {
                overrides: {
                    "!": true
                }
            }
        ],
        'max-len': [
            "error", {
                "code": 200,
                "ignorePattern": "<(svg)|(path)|(animateTransform)"
            }
        ],
        "object-shorthand": ["error", "always", { "avoidQuotes": false }],
        'comma-dangle': ['error', {
            "functions": "never",
            "objects": "always-multiline",
            "arrays": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
        }],
        // we prefer that multiline parameter destructuring be up to the developer
        "object-curly-newline": ["error", {
            "ObjectExpression": { "minProperties": 4, "consistent": true },
            "ObjectPattern": { "consistent": true },
            "ImportDeclaration": "never",
            "ExportDeclaration": { "multiline": true, "minProperties": 3 }
        }],
        // turn off require extensions for specific file types
        'import/extensions': ['error',
            {
                js: 'never',
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js','.jsx']
            },
            webpack: {
                config: 'webpack.config.js',
            }
        },
    },
};
