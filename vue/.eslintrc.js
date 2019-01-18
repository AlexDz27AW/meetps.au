const prodError = process.env.NODE_ENV === "production" ? "error" : "warn";

module.exports = {
    "extends": [
        "webpack",
        "plugin:vue/recommended",
    ],

    "globals": {
        "document": true,
        "window": true,
    },

    "plugins": [
        "vue",
    ],

    "settings": {
        // We're using webpack aliases in imports, so account for that.
        // (dep: eslint-import-webpack-resolver)
        "import/resolver": "webpack",
    },

    "rules": {

        // "Generic",

        "quotes": ["error", "double"],
        "indent": ["error", 4, {
            "SwitchCase": 1,
        }],
        "brace-style": ["error", "stroustrup"],
        "quote-props": ["error", "always"],
        "arrow-parens": ["error", "as-needed"],
        "arrow-body-style": ["error", "as-needed"],
        "padded-blocks": ["error", {
            "blocks": "never",
            "classes": "always",
        }],

        // "Disable import formatting enforcement, as there's just too much stuff in Webpack imports.",
        "sort-imports": ["off"],
        "import/order": ["off"],

        // People consider a = b = c poorly readable and too complex? Pffff.
        "no-multi-assign": ["off"],
        // Vuex has mutators that have, well, mutatable references in arguments.
        "no-param-reassign": ["off"],

        // Lax stuff in development mode that would error on prod.
        "no-unused-vars": [prodError, { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
        "no-console": [prodError],
        "no-debugger": [prodError],


        // Vue-related

        // Those 2-space templates but 4-space code in the same goddamn SFC is pure HERESY.
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "closeBracket": 0,
            "alignAttributesVertically": false,
            "ignores": [],
        }],

        // Default Vue config enforces self-closing non-void elements when empty.
        // This aims to streamline void/non-void self-closing patterns, but it's BS in HTML5.
        "vue/html-self-closing": ["error", {
            "html": {
                // HTML5 allows a slash as a syntactic sugar.
                "void": "always",
                // Self-closing normal tags would not close under HTML5
                "normal": "never",
                // Vue components can have contents (via slots), so they're not 'void', so see above.
                "component": "never",
            },
        }],
    }
};