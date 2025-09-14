module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'changeme'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
