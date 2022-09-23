module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [
            ".ios.js",
            ".android.js",
            ".ios.jsx",
            ".android.jsx",
            ".js",
            ".jsx",
            ".json",
            ".ts",
            ".tsx",
          ],
          root: ["."],
          alias: {
            "@assets": "./assets",
            "@api": "./src/api",
            "@components": "./src/components",
            "@constant": "./src/constant",
            "@firebase": "./src/firebase",
            "@helper": "./src/helper",
            "@hooks": "./src/hooks",
            "@model": "./src/model",
            "@navigation": "./src/navigation",
            "@redux": "./src/redux",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@theme": "./src/theme",
            // "@i18n": "./src/i18n",
            // "@routes": "./src/routes",
            // "@services": "./src/services",
            // '@env': './src/env.js',
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
