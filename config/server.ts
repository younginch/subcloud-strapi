export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", [
      "8tLADoM8+JIKrZ52CfY9gQ==",
      "wQ+AIlrwAoBYOwdLkPYpYw==",
      "p0yD9Ky/N515XvinxcuLug==",
      "E4N/UJiAeZlTnLif9ImR6Q==",
    ]),
  },
});
