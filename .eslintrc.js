module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'react-app'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'linebreak-style': 0,
		'max-len': 'off',
		'arrow-body-style': 'off',
		'no-trailing-spaces': 0,
		indent: [2, 'tab'],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'no-tabs': 0,
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function',
			},
		],
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		'jsx-a11y/label-has-associated-control': [
			2,
			{
				assert: 'either',
				depth: 3,
			},
		],
		'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
		'comma-dangle': [
			'error',
			{
				imports: 'always-multiline',
				exports: 'always-multiline',
				arrays: 'always-multiline',
				objects: 'always-multiline',
				functions: 'never',
			},
		],
		camelcase: 0,
		'react/jsx-props-no-spreading': 0,
		'function-paren-newline': 0,
		'object-curly-newline': 0,
		'react/jsx-curly-newline': 0,
		'react/prop-types': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'implicit-arrow-linebreak': 0,
		'react/jsx-one-expression-per-line': 0,
	},
};
