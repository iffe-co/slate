// https://cn.eslint.org/
// https://cn.eslint.org/docs/rules/
// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
// https://ts.xcatliu.com/engineering/lint.html
// https://github.com/AlloyTeam/eslint-config-alloy/blob/master/README.zh-CN.md

module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  plugins: ['import', 'react', 'prettier'],
  rules: {
    '@typescript-eslint/member-ordering': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    'max-params': 0,
    'react/jsx-no-useless-fragment': 0,
    complexity: 0,
    // 以下规则应该在重构时打开，并解决代码中的问题
    'no-eq-null': 0,
    eqeqeq: 0,
    'no-param-reassign': 0,
    'guard-for-in': 0,
    '@typescript-eslint/prefer-for-of': 0,
    '@typescript-eslint/prefer-optional-chain': 0,
    'no-undef': 0,
    'no-misleading-character-class': 0,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
      flowVersion: '0.53',
    },
  },
};
