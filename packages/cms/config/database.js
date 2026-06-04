module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5434),
      database: env("DATABASE_NAME", "cherkashynapiano"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD"),
      ssl: false,
    },
  },
});