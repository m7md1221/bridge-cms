module.exports = ({ env }) => ({
  auth: {
    secret: env('AUTH_SECRET'),
  },
  apiToken: {
    salt: env('ADMIN_JWT_SALT'),
  },
});
