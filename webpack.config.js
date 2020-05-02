import { resolve } from 'path';
import TerserPlugin from 'terser-webpack-plugin';

module.exports = {
    mode: 'production',
    optimization: {
      minimizer: [new TerserPlugin({})],
    },
    resolve: {
        extensions: [".js"],
        alias: {
            ["~"]: resolve(__dirname, "src")
        }
    },
}