module.exports = ({ env }) => ({
  apiToken: {
    salt: env('ADMIN_JWT_SALT'),
  },
});
