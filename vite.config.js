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
            host: '0.0.0.0',
            port: 3000
        },
        resolve: {
            alias: {
                '@': '/resources/js',
            },
        },
        plugins: [
            laravel(
                {
                    // publicDirectory: '../public_html',
                    input: [
                        'resources/js/app.js',
                        'resources/js/main.js',
                        'resources/sass/main.sass'],
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
