const fs = require("fs");
const $ = require("cheerio");

const directories = ["src/outline/index.js", "src/solid/index.js"];
// const directories = ["src"];
let errors = 0;

directories.forEach((dir) =>
  fs.readdirSync(dir).forEach((file) => {
    const viewBox = $.load(fs.readFileSync(`${dir}/${file}`))("svg").attr(
      "viewBox"
    );
    // the logRocket article provides the value(0 0 16 16 - viewBox) but the icons amson gave are (0 0 24 24 - viewBox)
    if (viewBox !== "0 0 24 24") {
      console.error(
        `Error: \`${dir}/${file}\` has a viewBox of \x1b[31m\`${viewBox}\`\x1b[0m`
      );
      errors++;
    }
  })
);

if (errors > 0) {
  process.exit(1);
} else {
  console.log("Tests passed!");
}
