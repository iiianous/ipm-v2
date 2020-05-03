import { resolve } from 'path';

module.exports = {
    mode: 'production',
    resolve: {
        extensions: [".js"],
        alias: {
            ["~"]: resolve(__dirname, "src")
        }
    },
}