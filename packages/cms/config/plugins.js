module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: env("EMAIL_FROM", "noreply@cherkashynapiano.com"),
        defaultReplyTo: env("EMAIL_REPLY_TO", "info@cherkashynapiano.com"),
      },
    },
  },
});
