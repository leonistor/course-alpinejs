import { defineConfig } from 'vite'
import { resolve } from 'path'
import handlebars from 'vite-plugin-handlebars'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
            helpers: {
                coalesce: (value, defaultValue) => {
                    if (value) {
                        return value
                    } else {
                        return defaultValue
                    }
                }
            }
        }),
        imagetools()
    ]
})
