const StyleDictionaryPackage = require("style-dictionary");
require("../helpers/transforms");
const { themes, files } = require("../helpers/files.helper");
const { themeConfig } = require("./theme.config");
const { fileConfig } = require("./global.config");

const platforms = ["scss", "css", "react-native", "json"];

console.log("Build started...", files);

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

themes.map((brand) => {
  platforms.map((platform) => {
    const StyleDictionary = StyleDictionaryPackage.extend(themeConfig(brand));

    StyleDictionary.buildPlatform(platform);
  });
});

files.map((file) => {
  platforms.map((platform) => {
    const StyleDictionary = StyleDictionaryPackage.extend(fileConfig(file));
    StyleDictionary.buildPlatform(platform);
  });
});

console.log("Build successful");
