import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
// @ts-ignore
import svgrPlugin from 'vite-plugin-svgr'
import relay from "vite-plugin-relay";

// see all documentation here https://vitejs.dev/config/
export default defineConfig({
    server: {
      host: '0.0.0.0'
    },
    // This changes the output dir from dist to build change as your need
    // comment this out if that isn't relevant for your project
    build: {
        outDir: 'build',
    },
    plugins: [
        reactRefresh(),
        svgrPlugin({
            svgrOptions: {
                icon: true,
                // ...svgr options (https://react-svgr.com/docs/options/)
            },
        }),
        relay
    ],
})
