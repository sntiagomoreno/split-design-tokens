exports.fileConfig = (fileName) => {
  return {
    source: [`src/transformed/${fileName}.json`],
    platforms: {
      json: {
        transformGroup: "web",
        prefix: "splt",
        buildPath: "dist/",
        files: [
          {
            destination: `${fileName}.json`,
            format: "json/nested",
          },
          {
            destination: `${fileName}.raw.json`,
            format: "json",
          },
        ],
      },
      "react-native": {
        transformGroup: "react-native",
        buildPath: "dist/",
        files: [
          {
            destination: `${fileName}.js`,
            format: "javascript/es6",
          },
          {
            format: "typescript/es6-declarations",
            destination: `${fileName}.d.ts`,
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
            destination: `${fileName}.scss`,
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
            destination: `${fileName}.css`,
            format: "css/variables",
            options: {
              outputReferences: true,
            },
          },
        ],
      },
    },
  };
};
