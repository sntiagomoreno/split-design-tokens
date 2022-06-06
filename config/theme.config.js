exports.themeConfig = (brand) => {
  console.log(typeof brand);
  const uppercaseBrand =
    typeof brand === "string"
      ? brand.charAt(0).toUpperCase() + brand.slice(1)
      : brand;
  return {
    source: [`src/transformed/theme-${brand}.json`],
    platforms: {
      json: {
        transformGroup: "web",
        prefix: "splt",
        buildPath: "dist/",
        files: [
          {
            destination: `theme.${brand}.json`,
            format: "json/nested",
          },
          {
            destination: `theme.${brand}.raw.json`,
            format: "json",
          },
        ],
      },
      scss: {
        transformGroup: "scss",
        transforms: ["name/cti/kebab", "font/quote", "typography/shorthand"],
        prefix: "splt",
        buildPath: "dist/",
        files: [
          {
            destination: `theme.${brand}.scss`,
            format: "scss/variables",
            options: {
              outputReferences: true,
            },
          },
        ],
      },
      css: {
        transformGroup: "css",
        transforms: ["name/cti/kebab", "font/quote", "typography/shorthand"],
        prefix: "splt",
        buildPath: "dist/",
        files: [
          {
            destination: `theme.${brand}.css`,
            format: "css/variables",
            options: {
              outputReferences: true,
            },
          },
        ],
      },
      "react-native": {
        transformGroup: "react-native",
        buildPath: "dist/",
        files: [
          {
            destination: `theme.${brand}.js`,
            format: "javascript/es6",
          },
          {
            format: "typescript/es6-declarations",
            destination: `theme.d.ts`,
          },
        ],
      },
      android: {
        transformGroup: "android",
        buildPath: "dist/android/themes/",
        files: [
          {
            destination: `${brand}_colors.xml`,
            format: "android/colors",
            filter: {
              attributes: {
                category: "color",
              },
            },
          },
        ],
      },
      ios: {
        transformGroup: "ios",
        buildPath: "dist/ios/themes/",
        files: [
          {
            destination: `SplitTheme${uppercaseBrand}Color.h`,
            format: "ios/colors.h",
            className: "SplitThemeDesignTokensColor",
            type: "SplitThemeDesignTokensColorName",
            filter: {
              attributes: {
                category: "color",
              },
            },
          },
          {
            destination: `SplitTheme${uppercaseBrand}Color.m`,
            format: "ios/colors.m",
            className: "SplitThemeDesignTokensColor",
            type: "SplitThemeDesignTokensColorName",
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
        prefix: "Split",
        buildPath: "dist/ios-swift/",
        files: [
          {
            destination: `Theme${uppercaseBrand}.swift`,
            format: "ios-swift/class.swift",
            className: `Theme${uppercaseBrand}Class`,
          },
        ],
      },
    },
  };
};
