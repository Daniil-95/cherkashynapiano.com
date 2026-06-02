module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendmail",
      providerOptions: {},
      settings: {
        defaultFrom: env("EMAIL_FROM", "noreply@cherkashynapiano.com"),
        defaultReplyTo: env("EMAIL_REPLY_TO", "info@cherkashynapiano.com"),
      },
    },
  },
});
