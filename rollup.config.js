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
// --config-file
// "svgr": "svgr --icon --title-prop --replace-attr-values '#fff=currentColor' -d src figmaIcons",

// "clean": "rimraf figmaIcons dist outline solid o s react node src sprite package *.tgz",

const config = [
  {
    // "main": "dist/cjs/index.js",
    // "module": "dist/esm/index.js",
    // input: ["src/solid/index.js", "src/outline/index.js"],
    input: [
      // "src/archiveSolid/index.js",
      // "src/archiveOutline/index.js",
      // "src/arrowSolid/index.js",
      // "src/arrowOutline/index.js",
      // "src/astrologySolid/index.js",
      // "src/astrologyOutline/index.js",
      // "src/buildingSolid/index.js",
      // "src/buildingOutline/index.js",
      // "src/businessSolid/index.js",
      // "src/businessOutline/index.js",
      // "src/callSolid/index.js",
      // "src/callOutline/index.js",
      // "src/communicationSolid/index.js",
      // "src/communicationOutline/index.js",
      // "src/complimentSolid/index.js",
      // "src/complimentOutline/index.js",
      // "src/contentSolid/index.js",
      // "src/contentOutline/index.js",
      // "src/cryptoSolid/index.js",
      // "src/cryptoOutline/index.js",
      // "src/deliverySolid/index.js",
      // "src/deliveryOutline/index.js",
      // "src/designSolid/index.js",
      // "src/designOutline/index.js",
      // "src/educationSolid/index.js",
      // "src/educationOutline/index.js",
      // "src/essentialSolid/index.js",
      // "src/essentialOutline/index.js",
      // "src/fileSolid/index.js",
      // "src/fileOutline/index.js",
      // "src/formatSolid/index.js",
      // "src/formatOutline/index.js",
      "src/gadgetSolid/index.js",
      "src/gadgetOutline/index.js",
      // "src/gridSolid/index.js",
      // "src/gridOutline/index.js",
      // "src/locationSolid/index.js",
      // "src/locationOutline/index.js",
      // "src/mediaSolid/index.js",
      // "src/mediaOutline/index.js",
      // "src/moneySolid/index.js",
      // "src/moneyOutline/index.js",
      // "src/notificationSolid/index.js",
      // "src/notificationOutline/index.js",
      // "src/programmingSolid/index.js",
      // "src/programmingOutline/index.js",
      // "src/searchSolid/index.js",
      // "src/searchOutline/index.js",
      // "src/securitySolid/index.js",
      // "src/securityOutline/index.js",
      // "src/settingsSolid/index.js",
      // "src/settingsOutline/index.js",
      // "src/shopSolid/index.js",
      // "src/shopOutline/index.js",
      // "src/socialSolid/index.js",
      // "src/socialOutline/index.js",
      // "src/timeSolid/index.js",
      // "src/timeOutline/index.js",
      // "src/transportSolid/index.js",
      // "src/transportOutline/index.js",
      // "src/usersSolid/index.js",
      // "src/usersOutline/index.js",
      // "src/weatherSolid/index.js",
      // "src/weatherOutline/index.js",
    ],
    output: [
      {
        // file: packageJSON.main, // outline
        dir: packageJSON.main,
        format: "cjs",
        // sourcemap: true,
      },
      // {
      //   // file: packageJSON.module,
      //   dir: packageJSON.main,
      //   format: "cjs",
      //   // sourcemap: true,
      // },
      // {
      //   // file: packageJSON.module,
      //   dir: packageJSON.main,
      //   format: "cjs",
      //   // sourcemap: true,
      // },
      // {
      //   file: packageJSON.main,
      //   // dir: "node",
      //   format: "cjs",
      //   sourcemap: true,
      // },
    ],
    // external: ["react", "react-dom", "styled-components", /@babel\/runtime/],
    external: ["react", "react-dom", /@babel\/runtime/],
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
