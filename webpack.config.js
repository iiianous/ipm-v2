import { resolve } from 'path'

module.exports = {
    resolve: {
        extensions: [".js"],
        alias: {
            ["~"]: resolve(__dirname, "src")
        }
    },
}