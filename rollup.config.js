// rollup.config.js
import typescript from "@rollup/plugin-typescript";
// import ts from "typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { babel } from "@rollup/plugin-babel";
import filesize from "rollup-plugin-filesize";
import { transform } from "typescript";
const packageJSON = require("./package.json");

// const _extends = require("@babel/runtime/helpers/extends");
// const React = require("react");
// "module": "dist/outline/index.js",
// "main": "dist/amsonIcons/index.js",
// "test": "node test.js",

const config = [
  {
    // "main": "dist/cjs/index.js",
    // "module": "dist/esm/index.js",
    // input: ["src/solid/index.js", "src/outline/index.js"],
    input: ["src/solid/index.js", "src/outline/index.js"],
    output: [
      {
        // file: packageJSON.main, // outline
        dir: packageJSON.main,
        format: "cjs",
        // sourcemap: true,
      },
      {
        // file: packageJSON.module,
        dir: packageJSON.main,
        format: "cjs",
        // sourcemap: true,
      },
      // {
      //   file: packageJSON.main,
      //   // dir: "node",
      //   format: "cjs",
      //   sourcemap: true,
      // },
    ],
    // external: ["react", "react-dom", "styled-components", /@babel\/runtime/],
    external: [/@babel\/runtime/, "react"],
    plugins: [
      // new one - YT
      babel({
        babelHelpers: "runtime",
        plugins: ["@babel/plugin-transform-runtime"],
      }),
      filesize(),
      // old one - LogRocket
      // peerDepsExternal(),
      // resolve(),
      // commonjs(),
      // typescript({
      //   compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" },
      // }),
      // terser(),
    ],
  },
  // {
  //   input: "src/outline/index.js",
  //   output: [
  //     {
  //       // file: packageJSON.main, // solid
  //       // dir: "react",
  //       dir: packageJSON.module,
  //       format: "cjs",
  //       // sourcemap: true,
  //     },
  //     // {
  //     //   file: packageJSON.main,
  //     //   // dir: "node",
  //     //   format: "cjs",
  //     //   sourcemap: true,
  //     // },
  //   ],
  //   // external: ["react", "react-dom", "styled-components", /@babel\/runtime/],
  //   external: [/@babel\/runtime/, "react"],
  //   plugins: [
  //     // new one - YT
  //     babel({
  //       babelHelpers: "runtime",
  //       plugins: ["@babel/plugin-transform-runtime"],
  //     }),
  //     filesize(),
  //     // old one - LogRocket
  //     // peerDepsExternal(),
  //     // resolve(),
  //     // commonjs(),
  //     // typescript({
  //     //   compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" },
  //     // }),
  //     // terser(),
  //   ],
  // },
];

export default config;
