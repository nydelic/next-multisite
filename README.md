This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Multisite setup

The routing is set up the following way:  
`hostname.com/projects/{project-slug}/*`.

The job of the middleware is to convert a different shape to the above shape internally. The routing that the middleware is expecting is the following:  
`{project-slug}.hostname.com/*`

This means when you access the shape of the middleware, the server will internally rewrite the URL to the shape that Next.js is expecting (no redirect).

## Adding custom domains?

~~Custom domains **from subdomains** should not be an issue, as a CNAME can simply be used to point to the subdomain. Because a CNAME will still work with the original domain for the `host` header, this should just work.~~

~~So a CNAME for `the-pigeons.ch` pointing to `the-pigeons.hostname.com` should work.~~

> On vercel, this setup probably won't work (due to their CNAME setup or something, did not figure it out yet). You should use A records if you want to work with custom sub.domains (just like root domains). And then add it to domains.json.

If you want to add a root domain (or you don't want to work with CNAME in general), it is a bit more complicated, since a CNAME cannot be used for root domains. The apex domain needs to be configured using an A record to point directly to the host server.

The middleware then needs to be informed about which root domains belong to which project. This is why the `domains.json` file exists. It is a simple JSON file that maps project slugs to root domains. It has the following shape:

```json
{
  "project-slug": ["domain1.com", "domain2.com"]
}
```
