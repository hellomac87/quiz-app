module.exports = {
    style: {
        // https://github.com/facebook/create-react-app/issues/11777
        // postcss X => postcssOptions O
        postcssOptions: {
            plugins: [require('tailwindcss'), require('autoprefixer')],
        },
    },
};
