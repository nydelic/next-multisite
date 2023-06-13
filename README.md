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

Custom domains should not be an issue, as a CNAME can simply be used to point to the subdomain. Because a CNAME will still work with the original domain for the `host` header, this should just work.

So a CNAME for `the-pigeons.ch` pointing to `the-pigeons.hostname.com` should work.
