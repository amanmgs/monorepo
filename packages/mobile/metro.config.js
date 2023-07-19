module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

const config = {
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'),
    path.resolve(__dirname, '../../node_modules/shared'),
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
