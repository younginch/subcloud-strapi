# π Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

## κ°λ°

```sh
npm i
npm run develop
```

## λ°°ν¬

AWS ec2 μ½μμμ subcloud-strapi μΈμ€ν΄μ€ μ΄μ©
subcloud-strapi-keypair.pem μ΄μ©

```sh
ssh ubuntu@15.164.9.73 -i ./subcloud-strapi-keypair.pem
```

git pull ν pm2λ₯Ό μ΄μ©νμ¬ λ°°ν¬

```sh
cd subcloud-strapi/
git pull
npm i
npm run build
pm2 start ecosystem.config.js
```

λ°°ν¬ μν νμΈ
```sh
pm2 status
pm2 logs 0
```

```sh
sudo snap start amazon-ssm-agent
```

## Credentials

Github token

`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`

```sh
git config --global credential.helper store
```

AWS token

```
AKIAYG6VFG2RVTW2WWME
4P5PeZjI2NU7cnopJBnUtPFLjlzQYDtpwQLiJ5v9
```

## Commands

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```sh
npm run start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```sh
npm run build
```

## βοΈ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## π Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## β¨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>π€« Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
