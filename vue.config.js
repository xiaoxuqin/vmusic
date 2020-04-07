module.exports = {

  publicPath: './',
  devServer: {
    open: true, //是否自动弹出浏览器页面
    host: "localhost",
    port: '8080',
    https: false,
    hotOnly: true,
    proxy: {
      '/api': {
        target: 'http://www.zhuoran.fun:3000/top/playlist', //API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }

}