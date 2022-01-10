import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
})

// Please note: There are currently no automatic readable class names during development.
// However, you can still manually provide a debug ID as the last argument to functions that generate scoped styles,
// e.g. export const className = style({ ... }, 'className');
