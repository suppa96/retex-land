import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: false,
  },
  devtools: { enabled: true },
  modules: ['@pinia/nuxt' ,'@vueuse/nuxt', "@nuxt/image"],
  css: ["~/assets/css/main.scss"],
  vite: {
    plugins: [
      Components({
        resolvers: [
          IconsResolver({
            prefix: false,
            customCollections: ["icons"],
          }),
        ],
        dts: true,
      }),
      Icons({
        customCollections: {
          icons: FileSystemIconLoader(
            fileURLToPath(new URL("./icons/", import.meta.url)),
            (svg) => {
              const viewBox = /viewBox="\d+ \d+ (\d+) (\d+)"/gi.exec(svg);
              if (!viewBox) return svg;
              const w = viewBox?.[1];
              const h = viewBox?.[2];
              svg = svg.replace(/width=".*?"/, `width="${w}" `);
              svg = svg.replace(/height=".*?"/, `height="${h}" `);
              return svg;
            }
          ),
        },
      }),
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
