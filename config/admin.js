module.exports = ({ env }) => ({
  auth: {
    secret: 'VAwSIe67uWtjfYeghKqKwg==', // AUTH_SECRET
  },
  apiToken: {
    salt: 'AQobwizR1Hw5uZS9A9oDww==', // ADMIN_JWT_SALT مباشرة
  },
  watchIgnoreFiles: ['**/local.js'], 
});
