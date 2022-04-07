const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/gateway',
    createProxyMiddleware({
      target: 'https://m.maizuo.com',
      changeOrigin: true,
    })
  );
};