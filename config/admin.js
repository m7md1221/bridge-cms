const crypto = require('crypto');

module.exports = ({ env }) => ({
  auth: {
    secret: env('AUTH_SECRET') || crypto.randomBytes(16).toString('base64'),
  },
  apiToken: {
    salt: env('ADMIN_JWT_SALT', 'AQobwizR1Hw5uZS9A9oDww=='), 
  },
  watchIgnoreFiles: ['**/local.js'], 
});
