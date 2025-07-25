module.exports = {
  root: true,
  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],

  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    curly: "error",
    eqeqeq: ["error", "always"],
    "comma-dangle": 0
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
        "**/stories/*.stories.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
