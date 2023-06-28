const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:'http://127.0.0.1:8080/',
    port : '8080',
  //   proxy: {
  //     '/api' : {
  //       target: 'http://localhost:8080',
  //       changeOrigin: true
  //     }
  //   }
  }
})
