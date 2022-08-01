export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "subcloud-prod.c66c7hkpmaeq.ap-northeast-2.rds.amazonaws.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "sub"),
      password: env("DATABASE_PASSWORD", "dlalsrbditmaktmxj"),
    },
  },
});
