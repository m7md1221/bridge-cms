module.exports = ({ env }) => ({
  auth: {
    // خلي قيمة ثابتة مباشرة بدل env
    secret: 'VAwSIe67uWtjfYeghKqKwg==',
  },
  apiToken: {
    // خلي قيمة ثابتة مباشرة بدل env
    salt: 'ufveMyB/bMDcafJcZ8t1sA==',
  },
  watchIgnoreFiles: ['**/local.js'],
});
