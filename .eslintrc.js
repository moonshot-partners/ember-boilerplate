module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'ember',
    'ember-suave'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:ember-suave/recommended'
  ],
  env: {
    browser: true,
    node: true
  },
  rules: {
    // Please keep this options alphabetically sorted, plugins at the end.
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'key-spacing': ['error', {
      singleLine: {},
      multiLine: { mode: 'minimum' }
    }],
    'prefer-const': 2,
    'max-len': ['error', 100, 2, {
      'ignoreUrls': true,
      'ignoreComments': true
    }],
    'generator-star-spacing': ['error', { 'before': true, 'after': false }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'ember-suave/no-const-outside-module-scope': 'off',
    'ember-suave/lines-between-object-properties': 'off',
    'ember-suave/require-access-in-comments': 'off'
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js'
      ],
      parserOptions: {
        sourceType: 'script',
        allowImportExportEverywhere: true
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: {
        camelcase: 'off'
      }
    }
  ]
};
