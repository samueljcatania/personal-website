const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'theme': '#f0d8bb',
            'dark-theme': '#27272a',
            'navbar': '#ffffff',
            'dark-theme-text': '#f5f5f5',
            ...colors
        },
        fontFamily: {
            'sans': ['ui-sans-serif', 'system-ui'],
            'body': ['Open Sans'],
            'hahmlet': ['Hahmlet'],
            'nunito': ['Nunito']
        },
        extend: {},
    },
    plugins: [],
}

