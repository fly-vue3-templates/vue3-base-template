module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    // eslint-plugin-import 插件， @see https://www.npmjs.com/package/eslint-plugin-import
    'plugin:import/recommended',
    // eslint-config-airbnb-base 插件
    'airbnb-base',
    // 1. 接入 prettier 的规则
    'prettier',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'vue',
    // 2. 加入 prettier 的 eslint 插件
    'prettier',
    // eslint-import-resolver-typescript 插件，@see https://www.npmjs.com/package/eslint-import-resolver-typescript
    'import',
  ],
  rules: {
    // 3. 注意要加上这一句，开启 prettier 自动修复的功能
    'prettier/prettier': 'error',
    // turn on errors for missing imports
    'import/no-unresolved': 'error',
  },
  // eslint-import-resolver-typescript 插件，@see https://www.npmjs.com/package/eslint-import-resolver-typescript
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
}
