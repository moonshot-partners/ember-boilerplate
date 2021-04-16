// config/content-security-policy.js

module.exports = function(env) {
  return {
    delivery: ['header'],
    enabled: env !== 'test',
    policy: {
      // Deny everything by default
      'default-src': ["'none'"],
      // Allow scripts
      'script-src':  ["'self'"],
      // Allow fonts
      'font-src': ["'self'"],
      // Allow data (xhr/websocket)
      'connect-src': ["'self'"],
      // Allow images from the origin itself (i.e. current domain)
      'img-src': ["'self'"],
      // Allow CSS
      'style-src': ["'self'"],
      // Omit `media-src` from policy
      // Browser will fallback to default-src for media resources (which is 'none', see above)
      'media-src': null
    },
    reportOnly: false
  };
};
