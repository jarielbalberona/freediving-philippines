module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@assets": "./assets",
            "@components": "./components",
            "@constants": "./constants",
            "@data": "./data",
            "@features": "./features",
            "@hooks": "./hooks",
            "@navigation": "./navigation",
            "@screens": "./screens",
            "@services": "./services",
          },
          extensions: [".js", ".ts", ".tsx", ".json"],
        },
      ],
    ],
  };
};
