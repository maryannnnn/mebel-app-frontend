/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  plugins: ['tailwindcss'],
  rules: {
    // Добавь сюда свои правила, если нужно
  },
}
