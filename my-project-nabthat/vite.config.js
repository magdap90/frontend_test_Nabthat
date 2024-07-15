import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';

export default defineConfig({
    build: {
        outDir: './public/',
        assetsDir: 'style',
    },
    plugins: [
        copy({
            targets: [
                { src: 'src/images/*', dest: 'public/images' },
                { src: 'src/json/*', dest: 'public/json' },
            ],
            hook: 'writeBundle',
        }),
    ],
});
