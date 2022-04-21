import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),
    kit: {
        adapter: adapter(),
        vite: {
            ssr: {
                external: ["@lib/my-lib"]
            },
            resolve: {
                alias: {
                    "@lib/my-lib": "@lib/my-lib/package"
                }
            },
            build: {
                rollupOptions: {
                    output: {
                        manualChunks: {
                            "lodash": ["lodash-es"]
                        }
                    }
                }
            },
        }
    },
// Override http methods in the Todo forms
    methodOverride: {
        allowed: ['PATCH', 'DELETE']
    }
};

export default config;
