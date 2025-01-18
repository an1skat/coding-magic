import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import path from "path";
import { defineConfig } from "vite";
import glob from "fast-glob";
import { fileURLToPath } from "url";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import posthtml from "@vituum/vite-plugin-posthtml";
import ViteSvgSpriteWrapper from "vite-svg-sprite-wrapper";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    ViteSvgSpriteWrapper({
      outputDir: "src/img",
    }),
    viteStaticCopy({
      targets: [
        {
          src: "src/img/icons.svg", 
          dest: "assets",
        },
        {
          src: "src/img/**/*.{png,jpg,jpeg}", 
          dest: "assets", 
        },
      ],
    }),
    posthtml(),
    ViteImageOptimizer({
      png: {
        quality: 86,
      },
      jpeg: {
        quality: 86,
      },
      jpg: {
        quality: 86,
      },
    }),
    {
      ...imagemin(["./src/img/**/*.{jpg,png,jpeg}"], {
        destination: "./src/img/webp/",
        plugins: [imageminWebp({ quality: 86 })],
      }),
      apply: "serve",
    },
  ],
  build: {
    minify: true,
    sourcemap: true,
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync(["./*.html", "./pages/**/*.html"])
          .map((file) => [
            path.relative(
              __dirname,
              file.slice(0, file.length - path.extname(file).length)
            ),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
  css: {
    devSourcemap: true,
  },
});
