const theme = require('./src/styles/theme');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme,
    variants: {
        extend: {},
    },
    plugins: [],
};
