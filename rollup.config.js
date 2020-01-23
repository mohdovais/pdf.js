import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
//import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
//import alias from "@rollup/plugin-alias";
//import path from "path";

const production = !process.env.ROLLUP_WATCH;
const environment = production ? "production" : "development";

export default [
  {
    input: "./src/pdf.web.js",
    output: {
      file: "dist/pdf.js",
      format: "umd",
      name: "pdfjs-dist/build/pdf",
      sourcemap: true,
    },
    plugins: [
      resolve({
        browser: true,
      }),
      babel(),
      commonjs(),
    ],
  },
  {
    input: "./src/pdf.web.js",
    output: {
      file: "dist/pdf.min.js",
      format: "umd",
      name: "pdfjs-dist/build/pdf",
      sourcemap: true,
    },
    plugins: [
      resolve({
        browser: true,
      }),
      babel(),
      commonjs(),
      production &&
        terser(/*{
            toplevel: true,
            mangle: {
                properties: true
            }
        }*/),
    ],
  },
];
