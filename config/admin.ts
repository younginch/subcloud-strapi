export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "9cd0dc688c3391b3d55bd2fde7e377ab"),
  },
  apiToken: { salt: env("API_TOKEN_SALT", "Ios0m8FEr0yMpz7yq+525w==") },
});
