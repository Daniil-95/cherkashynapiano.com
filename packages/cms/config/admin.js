module.exports = ({ env }) => ({
  auth: {
    secret:
      env("ADMIN_JWT_SECRET") ||
      "MjAyNS1jaGVya2FzaHluYXBpYW5vLWFkbWluLXNlY3JldC1rZXktMzItY2hhcnM=",
  },

  apiToken: {
    salt:
      env("API_TOKEN_SALT") ||
      "c2FsdC1mb3ItYXBpLXRva2VuLWtleTMyLWNoYXJzLWhlcmUtMjAyNQ==",
  },

  transfer: {
    token: {
      salt:
        env("TRANSFER_TOKEN_SALT") ||
        "dHJhbnNmZXItc2FsdC1rZXktMzItY2hhcnMtaGVyZS0yMDI1LXN0cmFwaQ==",
    },
  },

  flags: {
    nps: env.bool("FLAG_NPS", false),
    promoteEE: env.bool("FLAG_PROMOTE_EE", false),
  },
});