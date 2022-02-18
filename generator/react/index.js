module.exports = async (generator) => {
  // 1、渲染模板
  await generator.render("./template");
  // 2、扩展package.json
  generator.extendPackage({
    scripts: {
      dev: "q-tool run dev",
      build: "q-tool run build"
    },
    dependencies: {
      react: "^17.0.2",
      "react-dom": "^17.0.2"
    },
    devDependencies: {
      "@types/node": "^16.11.24",
      "@types/react": "^17.0.39",
      "@types/react-dom": "^17.0.11",
      typescript: "^4.5.5"
    }
  });
};
