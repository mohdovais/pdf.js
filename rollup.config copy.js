import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import alias from '@rollup/plugin-alias';
import path from 'path';

const production =  !process.env.ROLLUP_WATCH;
const environment = production ? 'production' : 'development';

export default {
    input: './web/app.js',
    output: {
        file: 'dist/app.umd.js',
        format: 'umd',
        name: 'app',
        sourcemap: production,
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
        },
    },
    plugins: [
        resolve({
            browser: true
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(environment),
        }),
        alias({
            entries: {
                pdfjs: path.join(__dirname, "src"),
                "pdfjs-web": path.join(__dirname, "web"),
                "pdfjs-lib": path.join(__dirname, "./src/pdf.js"),
              }
        }),
        babel(),
        commonjs(),
        production && terser({
            toplevel: true,
            mangle: {
                properties: true
            }
        }),
    ],
}