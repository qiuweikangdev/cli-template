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
            vue: "^3.2.25"
        },
        devDependencies: {
            "q-tool-cli": "^0.1.2"
        }
    });
};
