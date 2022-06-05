const StyleDictionary = require("style-dictionary");

/**
 * Transform typography shorthands for css variables
 */
StyleDictionary.registerTransform({
  name: "typography/shorthand",
  type: "value",
  transitive: true,
  matcher: (token) => token.type === "typography",
  transformer: (token) => {
    const { fontWeight, fontSize, lineHeight, fontFamily } =
      token.original.value;
    return `${fontWeight} ${fontSize}px/${
      lineHeight === "AUTO"
        ? "initial"
        : lineHeight.toString().slice(-1) === "%"
        ? lineHeight
        : `${lineHeight}px`
    } "${fontFamily}", sans-serif`;
  },
});

// Quote font family
StyleDictionary.registerTransform({
  name: "font/quote",
  type: "value",
  transitive: true,
  matcher: (token) => token.type === "fontFamilies",
  transformer: (token) => {
    const value = token.original.value;
    return `"${value}", sans-serif`;
  },
});
