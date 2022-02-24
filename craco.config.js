const CracoAlias = require('craco-alias');

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                tsConfigPath: 'tsconfig.paths.json',
            },
        },
    ],
    style: {
        // https://github.com/facebook/create-react-app/issues/11777
        // postcss X => postcssOptions O
        postcssOptions: {
            plugins: [require('tailwindcss'), require('autoprefixer')],
        },
    },
};
