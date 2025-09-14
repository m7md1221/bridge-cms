const crypto = require('crypto');

module.exports = ({ env }) => ({
  auth: {
    secret: env('AUTH_SECRET', 'VAwSIe67uWtjfYeghKqKwg=='),
  },
  apiToken: {
    // خلي قيمة ثابتة مباشرة، بدل الاعتماد على env فقط
    salt: env('ADMIN_JWT_SALT', 'ufveMyB/bMDcafJcZ8t1sA=='),
  },
  watchIgnoreFiles: ['**/local.js'],
});
