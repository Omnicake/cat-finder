module.exports = {
    publicPath: '/cat-finder/',
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
