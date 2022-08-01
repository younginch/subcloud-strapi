"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    upload: {
        config: {
            provider: "aws-s3",
            providerOptions: {
                accessKeyId: env("AWS_ACCESS_KEY_ID", "AKIAYG6VFG2RVTW2WWME"),
                secretAccessKey: env("AWS_ACCESS_SECRET", "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"),
                region: env("AWS_REGION", "ap-northeast-2"),
                params: {
                    Bucket: env("AWS_BUCKET_NAME", "subcloud-strapi"),
                },
            },
        },
    },
});
