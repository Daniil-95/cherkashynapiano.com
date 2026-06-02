import path from "path";

export default {
  admin: {
    auth: {
      secret: process.env.ADMIN_JWT_SECRET || "supersecretjwttoken",
    },
  },
  apiToken: {
    salt: process.env.API_TOKEN_SALT || "supersecretapitokensalt",
  },
  transfer: {
    token: {
      salt: process.env.TRANSFER_TOKEN_SALT || "supersecrettransfertokensalt",
    },
  },
  flags: {
    nps: process.env.FLAG_NPS !== "false",
    promoteEE: process.env.FLAG_PROMOTE_EE !== "false",
  },
};
