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
        }
    });
};
