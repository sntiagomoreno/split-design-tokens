exports.themeConfig = (brand) => {
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
    },
  };
};
