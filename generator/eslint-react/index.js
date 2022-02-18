module.exports = async (generator) => {
  // 1、渲染模板
  await generator.render('./template');
  // 2、扩展package.json
  generator.extendPackage({
    devDependencies: {
      '@typescript-eslint/eslint-plugin': '^5.12.0',
      '@typescript-eslint/parser': '^5.12.0',
      eslint: '^8.9.0',
      'eslint-config-airbnb': '^19.0.4',
      'eslint-plugin-import': '^2.25.4',
      'eslint-plugin-jsx-a11y': '^6.5.1',
      'eslint-plugin-react': '^7.28.0',
      'eslint-plugin-react-hooks': '^4.3.0'
    }
  });
};
