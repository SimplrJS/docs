var fs = require("fs");
var path = require("path");
var glob = require("glob");

exports.modifyWebpackConfig = function (config, stage) {
    // edit loaders here

    let files = glob.sync("assets/**/*");
    let outDir = "public";
    for (let file of files) {
        let directory = `${outDir}/${path.dirname(file)}`;

        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory);
        }

        fs.writeFileSync(`${outDir}/${file}`, fs.readFileSync(file));
    }

    // config.removeLoader('css');
    // // config.loader('css', function (cfg) {
    // //     cfg.test = /\.css$/
    // //     cfg.loader = 'style!css?modules'
    // //     return cfg
    // // });

    // config.loader('scss', function (cfg) {
    //     cfg.test = /\.scss$/;
    //     cfg.loaders = ["style-loader", "css-loader", "sass-loader"];
    // });
    return config;
}