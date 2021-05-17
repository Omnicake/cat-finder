module.exports = {
    transpileDependencies: [
        'vuetify'
    ],
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Cat Finder";
                return args;
            })
    }
}
