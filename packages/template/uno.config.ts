// uno.config.ts
import { defineConfig, presetWebFonts } from 'unocss';
import presetUno from '@unocss/preset-uno';

export default defineConfig({
  presets: [presetUno(), presetWebFonts()],
});
