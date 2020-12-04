module.exports = {
  extends: ["plugin:@angular-eslint/recommended"],
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    createDefaultProgram: true
  },
  rules: {
    quotes: ["error", "double"]
  },
  overrides: [
    {
      files: ["*.component.html"],
      parser: "@angular-eslint/template-parser",
      parserOptions: {
        project: "./tsconfig.app.json",
        ecmaVersion: 2020,
        sourceType: "module"
      },
      plugins: ["@angular-eslint/template"]
    },
    {
      files: ["*.ts"],
      plugins: [
        "@angular-eslint/template",
        "@typescript-eslint",
        "import",
        "jsdoc",
        "prefer-arrow",
        "prettier",
        "simple-import-sort"
      ],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@angular-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint"
      ],
      rules: {
        "@angular-eslint/directive-selector": ["error", { type: "attribute", prefix: "app", style: "camelCase" }],
        "@angular-eslint/component-selector": ["error", { type: "element", prefix: "app", style: "kebab-case" }],
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "sort-imports": "off",
        "simple-import-sort/sort": [
          "error",
          {
            groups: [
              // Side effect imports.
              ["^\\u0000"],
              // Packages.
              ["^@?(?!mediu@nrwl/eslint-plugin-nxm-stories)\\w"],
              ["^@medium-stories?\\w"],
              ["^[^.]"],
              // Relative imports.
              // Anything that starts with a dot.
              ["^\\."]
            ]
          }
        ]
      },
      parser: "@typescript-eslint/parser"
    },
    {
      files: ["src/**/*.spec.ts", "src/**/*.d.ts"],
      parserOptions: {
        project: "./src/tsconfig.spec.json"
      },
      extends: ["plugin:jasmine/recommended"],
      plugins: ["jasmine"],
      env: { jasmine: true },
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-assignmentall": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-assignment": "off"
      }
    }
  ]
};
