# Aurora

The live version is on [aurora.koalafy.dev](https://aurora.koalafy.dev/).

## Stacks

- [React](https://yarn.pm/react)
- [React DOM](https://yarn.pm/react-dom)
- [Next.js](https://yarn.pm/next)
- [Yarn](https://yarnpkg.com)

## Development

To prevent conflict in module resolution, make sure to use [Yarn](https://yarnpkg.com)
so `yarn.lock` won't conflict with `package-lock.json`.

- Clone repo: `git clone git@github.com:koalafyhq/aurora.git`
- Install dependencies: `yarn`
- Start development server: `yarn dev`

And using stable Node.js version is highly recommended.

## Production

If `.next` directory is not exists, you need to build it first:

```bash
yarn build
```
