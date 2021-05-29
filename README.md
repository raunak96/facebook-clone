# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) (v2.1) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss app-name
# or
yarn create next-app -e with-tailwindcss app-name
```

# Facebook 2.0
Building Facebook 2.0 from Scratch Using React, Next.js, Tailwind CSS, Firebase 
### In Case SVG is not loaded in Components.
You need to provide a webpack loader that will handle SVG imports, one of the famous one is svgr.

In order to configure it to work with next, you need to add to your next.config.js file the usage of the loader, like that:

// next.config.js

```javascript    
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

```
For more config info, check out the docs.

Don't forget to install it first: npm install —-save-dev@svgr/webpack

Reference: https://stackoverflow.com/questions/55175445/cant-import-svg-into-next-js


### Required Packages
* yarn add next-auth (Integrating Facebook Login and Auth)
* yarn add react-firebase-hooks (Consuming Firebase Data)
* yarn add tailwind-scrollbar-hide

### Next-Auth.js (FBLogin Config: https://next-auth.js.org/providers/facebook)
* Create .env.local file and add the following config

  ```
  FACEBOOK_CLIENT_ID=put your FB AppID
  FACEBOOK_CLIENT_SECRET=put your FB App SecretKey
  NEXTAUTH_URL=App URL

  ```

### Facebook Auth Developer Settings for Production Deployment ([https://developers.facebook.com/apps](https://developers.facebook.com/apps))
- Switch on Live/Production Mode
- Add domain in Settings -> Basic
- Go to Facebook Login -> Settings, then add the following to Valid OAuth Redirect URIs **domainurl/api/auth/callback/facebook**.

