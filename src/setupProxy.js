//내 Local Server가 있어야 쓸모 있는 듯?
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://192.168.204.158:3000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  )
}
