# sveltekit_rushjs

## Steps to reproduce issue sveltekit-rushjs local module [issue](https://github.com/sveltejs/kit/issues/4261)

1. Assuming that node 16.14.x is installed
2. `corepack enable pnpm`
3. `pnpm i -g pnpm`
4. `pnpm i -g @microsoft/rush`
5. `git clone git@github.com:bhvngt/sveltekit_rushjs.git`
6. `cd sveltekit_rushjs`
7. `rush update`
8. `cd lib/my-lib && ./node_modules/.bin/svelte-kit build && ./node_modules/.bin/svelte-kit package`
9. `cd ../../app/my-app && ./node_modules/.bin/svelte-kit build`
10. throws following error

```
vite v2.9.5 building for production...
✓ 57 modules transformed.
.svelte-kit/output/client/_app/assets/svelte-logo-87df40b8.svg                           1.85 KiB
.svelte-kit/output/client/_app/assets/fira-mono-cyrillic-ext-400-normal-3df7909e.woff2   15.40 KiB
.svelte-kit/output/client/_app/assets/fira-mono-cyrillic-400-normal-c7d433fd.woff2       8.89 KiB
.svelte-kit/output/client/_app/assets/fira-mono-greek-400-normal-a8be01ce.woff2          10.27 KiB
.svelte-kit/output/client/_app/assets/fira-mono-latin-400-normal-e43b3538.woff2          15.90 KiB
.svelte-kit/output/client/_app/assets/fira-mono-greek-ext-400-normal-9e2fe623.woff2      7.33 KiB
.svelte-kit/output/client/_app/assets/fira-mono-latin-ext-400-normal-6bfabd30.woff2      11.10 KiB
.svelte-kit/output/client/_app/assets/fira-mono-all-400-normal-1e3b098c.woff             75.55 KiB
.svelte-kit/output/client/_app/manifest.json                                             2.67 KiB
.svelte-kit/output/client/_app/error.svelte-e12df2f8.js                                  1.56 KiB / gzip: 0.74 KiB
.svelte-kit/output/client/_app/pages/__layout.svelte-92676702.js                         4.76 KiB / gzip: 1.86 KiB
.svelte-kit/output/client/_app/pages/about.svelte-8a0318e4.js                            2.38 KiB / gzip: 1.09 KiB
.svelte-kit/output/client/_app/chunks/index-31a8e707.js                                  0.43 KiB / gzip: 0.30 KiB
.svelte-kit/output/client/_app/chunks/singletons-d1fb5791.js                             0.05 KiB / gzip: 0.07 KiB
.svelte-kit/output/client/_app/pages/todos/index.svelte-20ea175e.js                      6.70 KiB / gzip: 2.80 KiB
.svelte-kit/output/client/_app/start-ce2f0f6a.js                                         23.24 KiB / gzip: 8.64 KiB
.svelte-kit/output/client/_app/assets/pages/about.svelte-bf4528fa.css                    0.11 KiB / gzip: 0.10 KiB
.svelte-kit/output/client/_app/pages/index.svelte-69a32d71.js                            8.33 KiB / gzip: 3.58 KiB
.svelte-kit/output/client/_app/assets/pages/todos/index.svelte-a910a02d.css              3.70 KiB / gzip: 1.03 KiB
.svelte-kit/output/client/_app/assets/pages/index.svelte-d0605c9c.css                    1.43 KiB / gzip: 0.51 KiB
.svelte-kit/output/client/_app/chunks/index-c6226adc.js                                  11.77 KiB / gzip: 5.00 KiB
.svelte-kit/output/client/_app/assets/pages/__layout.svelte-15681802.css                 4.96 KiB / gzip: 1.55 KiB
vite v2.9.5 building SSR bundle for production...
✓ 36 modules transformed.
.svelte-kit/output/server/manifest.json                         2.33 KiB
.svelte-kit/output/server/index.js                              75.35 KiB
.svelte-kit/output/server/entries/endpoints/todos/index.ts.js   1.33 KiB
.svelte-kit/output/server/entries/pages/__layout.svelte.js      4.60 KiB
.svelte-kit/output/server/entries/fallbacks/error.svelte.js     0.72 KiB
.svelte-kit/output/server/entries/pages/about.svelte.js         1.30 KiB
.svelte-kit/output/server/entries/pages/index.svelte.js         8.40 KiB
.svelte-kit/output/server/entries/pages/todos/index.svelte.js   5.84 KiB
.svelte-kit/output/server/chunks/index-acb02024.js              3.94 KiB
.svelte-kit/output/server/chunks/hooks-87fb94fd.js              0.47 KiB
Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'lodash-es' imported from /Users/Bhavin/Projects/lab/temp/sveltekit_rushjs/app/my-app/.svelte-kit/output/server/entries/pages/index.svelte.js
Did you mean to import lodash-es@4.17.21/node_modules/lodash-es/chunk.js?
    at new NodeError (node:internal/errors:371:5)
    at packageResolve (node:internal/modules/esm/resolve:930:9)
    at moduleResolve (node:internal/modules/esm/resolve:976:18)
    at defaultResolve (node:internal/modules/esm/resolve:1078:11)
    at ESMLoader.resolve (node:internal/modules/esm/loader:530:30)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:251:18)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:79:40)
    at link (node:internal/modules/esm/module_job:78:36)
> 500 /
```
