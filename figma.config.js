// figma.config.js
require("dotenv").config();
const svgo = require("@figma-export/transform-svg-with-svgo");
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const fileId = process.env.FILE_ID;

const outputters = [
  require("@figma-export/output-components-as-svg")({ output: "./figmaIcons" }),
  // require("@figma-export/output-components-as-svgr")({
  //   getFileExtension: () => ".js",
  //   getComponentName: ({ componentName, pageName }) =>
  //     componentName + capitalize(pageName),
  //   getSvgrConfig: () => ({ typescript: false }),
  //   output: "./src",
  // }),
  // require("@figma-export/output-components-as-svgstore")({
  //   getIconId: ({ componentName }) => componentName.toLowerCase(),
  //   output: "./sprite",
  // }),
];

// /** @type {import('svgo').PluginConfig[]} */
const solidSVGOConfig = [
  { removeDimensions: true },
  { sortAttrs: true },
  { removeAttrs: { attrs: "fill" } },
  { addAttributesToSVGElement: { attribute: { fill: "currentColor" } } },
];

// /** @type {import('svgo').PluginConfig[]} */
const outlineSVGOConfig = [
  { removeDimensions: true },
  { sortAttrs: true },
  { removeAttrs: { attrs: "stroke" } },
  { addAttributesToSVGElement: { attribute: { stroke: "currentColor" } } },
];

/** @type {import('@figma-export/types').FigmaExportRC} */
module.exports = {
  commands: [
    [
      "components",
      {
        fileId,
        onlyFromPages: ["solid"],
        transformers: [
          require("@figma-export/transform-svg-with-svgo")({
            multipass: true,
            plugins: [
              {
                name: "preset-default",
                params: {
                  overrides: {
                    // removeViewBox: false,
                  },
                },
              },
              {
                name: "removeDimensions",
                active: true,
              },
              {
                name: "sortAttrs",
                active: true,
              },
              {
                name: "removeAttrs",
                params: { attrs: "fill" },
              },
              {
                name: "addAttributesToSVGElement",
                params: { attributes: [{ fill: "currentColor" }] },
              },
              // { removeDimensions: true },
              // { sortAttrs: true },
              // { removeAttrs: { attrs: "fill" } },
              // {
              //   addAttributesToSVGElement: {
              //     attribute: { fill: "currentColor" },
              //   },
              // },
            ],
          }),
        ],
        outputters,
      },
    ],
    [
      "components",
      {
        fileId,
        onlyFromPages: ["outline"],
        transformers: [
          require("@figma-export/transform-svg-with-svgo")({
            multipass: true,
            plugins: [
              {
                name: "preset-default",
                params: {
                  overrides: {
                    // removeViewBox: false,
                  },
                },
              },
              {
                name: "removeDimensions",
                active: true,
              },
              {
                name: "sortAttrs",
                active: true,
              },
              {
                name: "removeAttrs",
                params: { attrs: "stroke" },
              },
              {
                name: "addAttributesToSVGElement",
                params: { attributes: [{ stroke: "currentColor" }] },
              },
              // { removeDimensions: true },
              // { sortAttrs: true },
              // { removeAttrs: { attrs: "fill" } },
              // {
              //   addAttributesToSVGElement: {
              //     attribute: { fill: "currentColor" },
              //   },
              // },
            ],
          }),
        ],
        outputters,
      },
    ],
  ],
};
