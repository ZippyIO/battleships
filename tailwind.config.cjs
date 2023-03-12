/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            opensans: ['Open Sans', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif'],
        },
        extend: {
            colors: {
                dark: {
                    50: '#2A2A2F',
                    100: '#29292E',
                    200: '#26262B',
                    300: '#242429',
                    400: '#222226',
                    500: '#1F1F23',
                    600: '#1D1D20',
                    700: '#1A1A1E',
                    800: '#18181B',
                    900: '#161618',
                },
            },
        },
    },
};
