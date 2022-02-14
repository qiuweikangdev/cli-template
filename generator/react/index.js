module.exports = async (generator) => {
  // 1、渲染模板
  await generator.render("./template");
  // 2、扩展package.json
  generator.extendPackage({
    scripts: {
      dev: "q-cli run dev",
      build: "q-cli run build"
    },
    dependencies: {
      react: "^17.0.2",
      "react-dom": "^17.0.2"
    },
    devDependencies: {
      "@types/react": "^17.0.39",
      "@types/react-dom": "^17.0.11",
      typescript: "^4.5.5",
    //   "ts-loader": "^9.2.6",
    //   webpack: "^5.68.0"
    }
  });
};
