/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'theme': '#f0d8bb',
            'navbar': '#ffffff'
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

