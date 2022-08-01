module.exports = {
  apps: [
    {
      name: "subcloud-strapi",
      cwd: "/home/ubuntu/subcloud-strapi",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        DATABASE_HOST:
          "subcloud-prod.c66c7hkpmaeq.ap-northeast-2.rds.amazonaws.com",
        DATABASE_PORT: "5432",
        DATABASE_NAME: "strapi",
        DATABASE_USERNAME: "sub", // default username
        DATABASE_PASSWORD: "dlalsrbditmaktmxj",
        AWS_ACCESS_KEY_ID: "AKIAYG6VFG2RVTW2WWME",
        AWS_ACCESS_SECRET: "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", // Find it in Amazon S3 Dashboard
        AWS_REGION: "ap-northeast-2",
        AWS_BUCKET_NAME: "subcloud-strapi",
      },
    },
  ],
};
