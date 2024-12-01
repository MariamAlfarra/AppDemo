module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:vuejs-accessibility/recommended',
        '@nuxt/eslint-config',
        'plugin:vue/vue3-recommended',
        'plugin:tailwindcss/recommended'
    ],
    plugins: ["vuejs-accessibility"],
    ignorePatterns: ['.nuxt/', 'node_modules/'],
    rules: {
        "comma-dangle": ["error", "never"],
        indent: ["error", 4],

        quotes: ["error", "double"],

        semi: ["error", "always"],
        "tailwindcss/no-custom-classname": "off",
        "vue/html-indent": ["error", 4],
        "vue/html-self-closing": "off",
        "vue/multi-word-component-names": "off",
        "vue/no-v-html": "off",
        "vue/first-attribute-linebreak": ["off"],
        "vue/html-closing-bracket-newline": "off",
        "no-multi-spaces": "error",
        "vue/max-attributes-per-line": [
            "error",
            {
                singleline: {
                    max: 3
                },
                multiline: {
                    max: 1
                }
            }
        ]
    }
};