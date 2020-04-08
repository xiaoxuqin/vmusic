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
        target: 'http://www.zhuoran.fun:3000', //API服务器的地址
        changeOrigin: true,
        ws: true,//是否代理websockets
        changeOrigin: true,   // 设置同源  默认false，是否需要改变原始主机头为目标URL
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }

}