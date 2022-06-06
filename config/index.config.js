const StyleDictionaryPackage = require("style-dictionary");
require("../helpers/transforms");
const { themes, files } = require("../helpers/files.helper");
const { themeConfig } = require("./theme.config");
const { fileConfig } = require("./global.config");

const filePlatforms = ["scss", "css", "react-native", "json"];
const themePlatforms = [
  "scss",
  "css",
  "react-native",
  "json",
  "ios-swift",
  "android",
  "ios",
];

console.log("Build started...", files);

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

themes.map((brand) => {
  themePlatforms.map((platform) => {
    const StyleDictionary = StyleDictionaryPackage.extend(themeConfig(brand));
    StyleDictionary.buildPlatform(platform);
  });
});

files.map((file) => {
  filePlatforms.map((platform) => {
    const StyleDictionary = StyleDictionaryPackage.extend(fileConfig(file));
    StyleDictionary.buildPlatform(platform);
  });
});

const StyleDictionary = StyleDictionaryPackage.extend({
  source: [
    `src/transformed/core.json`,
    `src/transformed/semantic.json`,
    `src/transformed/component.json`,
  ],
  platforms: {
    android: {
      transformGroup: "android",
      buildPath: "dist/android/",
      files: [
        {
          destination: "colors.xml",
          format: "android/colors",
          filter: {
            attributes: {
              category: "color",
            },
          },
        },
        {
          destination: "space.xml",
          format: "android/resources",
          resourceType: "dimen",
          filter: {
            attributes: {
              category: "spacing",
            },
          },
        },
        {
          destination: "font-size.xml",
          format: "android/resources",
          resourceType: "dimen",
          filter: {
            attributes: {
              category: "font-size",
            },
          },
        },
        {
          destination: "sizing.xml",
          format: "android/resources",
          resourceType: "dimen",
          filter: {
            attributes: {
              category: "sizing",
            },
          },
        },
      ],
    },
    ios: {
      transformGroup: "ios",
      buildPath: "dist/ios/",
      files: [
        {
          destination: "SplitDesignTokensColor.h",
          format: "ios/colors.h",
          className: "SplitDesignTokensColor",
          type: "SplitDesignTokensColorName",
          filter: {
            attributes: {
              category: "color",
            },
          },
        },
        {
          destination: "SplitDesignTokensColor.m",
          format: "ios/colors.m",
          className: "SplitDesignTokensColor",
          type: "SplitDesignTokensColorName",
          filter: {
            attributes: {
              category: "color",
            },
          },
        },
      ],
    },
    "ios-swift": {
      transformGroup: "ios-swift",
      buildPath: "dist/ios-swift/",
      files: [
        {
          destination: "SplitDesignTokens.swift",
          format: "ios-swift/class.swift",
          className: "SplitDesignTokens",
        },
      ],
    },
  },
});

StyleDictionary.buildAllPlatforms();

console.log("Build successful");
