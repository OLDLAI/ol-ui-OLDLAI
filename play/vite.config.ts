import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import DefineOptions from "unplugin-vue-define-options/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";
export default defineConfig({
// @ts-ignore
  plugins: [vue(), DefineOptions(),
  ],
});