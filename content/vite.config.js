import { defineConfig } from "vite";
import { resolve } from "path";
import dns from "dns";
import mkcert from "vite-plugin-mkcert";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
    build: {
        assetsDir: "",
        outDir: "./wwwroot",
        rollupOptions: {
            input: {
                scripts: resolve(__dirname, "./Assets/Scripts/index.ts"),
                styles: resolve(__dirname, "./Assets/Styles/index.scss"),
            },
            output: {
                assetFileNames: (assetInfo) => {
                    const info = assetInfo.name.split(".");

                    if (/css/.test(info[info.length - 1])) {
                        return "styles.css";
                    }

                    return "[name][extname]";
                },
                chunkFileNames: "[name].js",
                entryFileNames: "[name].js",
            },
        },
    },
    experimental: {
        renderBuiltUrl(filename) {
            return "/Etch.OrchardCore.ThemeBoilerplate/" + filename;
        },
    },
    plugins: [mkcert()],
    server: { https: true },
});
