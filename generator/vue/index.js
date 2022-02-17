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
            typescript: "^4.5.5",
            "vue-loader": "^17.0.0",
            "css-loader": "^6.6.0",
            "style-loader": "^3.3.1",
            "ts-loader": "^9.2.6",
            "file-loader": "^6.2.0",
            "url-loader": "^4.1.1",
            webpack: "^5.68.0"
        }
    });
};
