module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-d33gkm8dl3ps738sfpl0-a'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'bridge_steps'),
      user: env('DATABASE_USERNAME', 'bridge_steps_user'),
      password: env('DATABASE_PASSWORD', 'Xt8p3dsP91xzqQ339fMEVpcvlDExpYPH'),
      ssl: {
        rejectUnauthorized: false, // لازم عشان self-signed certificate
      },
    },
  },
});
