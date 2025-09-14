module.exports = ({ env }) => ({
  auth: {
    secret: env('AUTH_SECRET'),
  },
});
