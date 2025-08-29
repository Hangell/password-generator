module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./src'],
                    alias: {
                        '@app': './src/app',
                        '@screens': './src/screens',
                        '@shared': './src/shared',
                        '@assets': './assets',
                        '@styles': './styles'
                    }
                }
            ],
            'react-native-reanimated/plugin'
        ]
    };
};
