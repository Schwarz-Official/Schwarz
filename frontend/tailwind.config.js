/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens :{
                'max-md' : {'max': '1024px'},
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            }
        },
    },
    plugins: [
        plugin(({ addVariant, e, postcss }) => {
            addVariant('firefox', ({ container, separator }) => {
                const isFirefoxRule = postcss.atRule({
                    name: '-moz-document',
                    params: 'url-prefix()',
                });
                isFirefoxRule.append(container.nodes);
                container.append(isFirefoxRule);
                isFirefoxRule.walkRules((rule) => {
                    rule.selector = `.${e(
                        `firefox${separator}${rule.selector.slice(1)}`
                    )}`;
                });
            });
        }),
    ],
}