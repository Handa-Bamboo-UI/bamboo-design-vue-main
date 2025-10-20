import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite";

export default defineConfig({
  build: {
    outDir: "es",
    rollupOptions: {
      external: ["vue", /\.less/, "@bamboo-design/utils"],
      input: ["index.ts"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs",
          preserveModules: true,
          exports: "named",
          dir: "../bamboo-design/es",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          preserveModules: true,
          exports: "named",
          dir: "../bamboo-design/lib",
        },
      ],
    },
    lib: {
      entry: "./index.ts",
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: "./src",
      outDir: ["../bamboo-design/es/src", "../bamboo-design/lib/src"],
      tsconfigPath: "../../tsconfig.json",
    }),
    DefineOptions(),
    {
      name: "style",
      generateBundle(config, bundle) {
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler: any = bundle[key as any];
          this.emitFile({
            type: "asset",
            fileName: key,
            source: bundler.code.replace(/\.less/g, ".css"),
          });
        }
      },
    },
  ],
});
