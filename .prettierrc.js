module.exports = {
  // arrowParens: 'avoid',
  // bracketSameLine: true,
  // bracketSpacing: false,
  // singleQuote: true,
  // trailingComma: 'all',
  // singleQuote: true,
  // trailingComma: "all"
  printWidth: 150,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "always",
  requirePragma: false,
  insertPragma: false,
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  vueIndentScriptAndStyle: false,
  endOfLine: "auto",
  overrides: [
    {
      files: "*.md",
      options: {
        tabWidth: 4
      }
    }
  ]
};
