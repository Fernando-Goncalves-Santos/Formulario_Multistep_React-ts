import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';

export default defineConfig({
  base: "/Formulario_Multistep_React-ts.git/",
  plugins: [react(), ghPages()],
});
