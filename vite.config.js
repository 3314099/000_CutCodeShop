import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default ({mode}) => {
    process.env = {
        ...process.env, ...loadEnv(mode, process.cwd())
    }
    console.log(process.env.VITE_HOST)
    return defineConfig({

        server: {
            host: process.env.VITE_HOST,
            port: process.env.VITE_PORT,
        },
        resolve: {
            alias: {
                '@': '/resources/js',
            },
        },
        plugins: [
            laravel(
                {
                    input: 'resources/js/app.js',
                    refresh: true
                },
            ),
            {
                name: 'blade',
                handleHotUpdate({ file, server}) {
                    if (file.endsWith('blade.php')) {
                        server.ws.send({
                            type: 'full-reload',
                            path: '*'
                        })
                    }
                }
            },
            vue({
                template: {
                    transformAssetUrls: {
                        base: null,
                        includeAbsolute: false,
                    },
                },
            }),
        ],
    });
}
