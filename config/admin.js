const crypto = require('crypto');

module.exports = ({ env }) => ({
  auth: {
    secret: env('AUTH_SECRET') || crypto.randomBytes(16).toString('base64'),
  },
  apiToken: {
    salt: env('ADMIN_JWT_SALT') || crypto.randomBytes(16).toString('base64'),
  },
  watchIgnoreFiles: ['**/local.js'], 
});
