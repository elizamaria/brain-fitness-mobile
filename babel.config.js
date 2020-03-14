module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.ios.js', '.android.js', '.json'],
        alias: {
          '@': './src',
        },
      },
    ],
  ],
};
