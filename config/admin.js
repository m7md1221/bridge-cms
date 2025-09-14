module.exports = ({ env }) => ({
  auth: {
    secret: env('AUTH_SECRET', 'VAwSIe67uWtjfYeghKqKwg=='),
  },
  apiToken: {
    salt: env('ADMIN_JWT_SALT', 'AQobwizR1Hw5uZS9A9oDww=='),
  },
});
