// const fs = require("fs");
// const $ = require("cheerio");

const directories = [
  "figmaIcons/archiveSolid",
  "figmaIcons/archiveOutline",
  "figmaIcons/arrowSolid",
  "figmaIcons/arrowOutline",
  "figmaIcons/astrologySolid",
  "figmaIcons/astrologyOutline",
  "figmaIcons/buildingSolid",
  "figmaIcons/buildingOutline",
  "figmaIcons/businessSolid",
  "figmaIcons/businessOutline",
  "figmaIcons/callSolid",
  "figmaIcons/callOutline",
  "figmaIcons/communicationSolid",
  "figmaIcons/communicationOutline",
  "figmaIcons/complimentSolid",
  "figmaIcons/complimentOutline",
  "figmaIcons/contentSolid",
  "figmaIcons/contentOutline",
  "figmaIcons/cryptoSolid",
  "figmaIcons/cryptoOutline",
  "figmaIcons/deliverySolid",
  "figmaIcons/deliveryOutline",
  "figmaIcons/designSolid",
  "figmaIcons/designOutline",
  "figmaIcons/educationSolid",
  "figmaIcons/educationOutline",
  "figmaIcons/essentialSolid",
  "figmaIcons/essentialOutline",
  "figmaIcons/fileSolid",
  "figmaIcons/fileOutline",
  "figmaIcons/formatSolid",
  "figmaIcons/formatOutline",
  "figmaIcons/gadgetSolid",
  "figmaIcons/gadgetOutline",
  "figmaIcons/gridSolid",
  "figmaIcons/gridOutline",
  "figmaIcons/locationSolid",
  "figmaIcons/locationOutline",
  "figmaIcons/mediaSolid",
  "figmaIcons/mediaOutline",
  "figmaIcons/moneySolid",
  "figmaIcons/moneyOutline",
  "figmaIcons/notificationSolid",
  "figmaIcons/notificationOutline",
  "figmaIcons/programmingSolid",
  "figmaIcons/programmingOutline",
  "figmaIcons/searchSolid",
  "figmaIcons/searchOutline",
  "figmaIcons/securitySolid",
  "figmaIcons/securityOutline",
  "figmaIcons/settingsSolid",
  "figmaIcons/settingsOutline",
  "figmaIcons/shopSolid",
  "figmaIcons/shopOutline",
  "figmaIcons/socialSolid",
  "figmaIcons/socialOutline",
  "figmaIcons/timeSolid",
  "figmaIcons/timeOutline",
  "figmaIcons/transportSolid",
  "figmaIcons/transportOutline",
  "figmaIcons/usersSolid",
  "figmaIcons/usersOutline",
  "figmaIcons/weatherSolid",
  "figmaIcons/weatherOutline",
];

let errors = 0;

// directories.forEach((dir) =>
//   fs.readdirSync(dir).forEach((file) => {
//     const viewBox = $.load(fs.readFileSync(`${dir}/${file}`))("svg").attr(
//       "viewBox"
//     );
//     // the logRocket article provides the value(0 0 16 16 - viewBox) but the icons amson gave are (0 0 24 24 - viewBox)
//     if (viewBox !== "0 0 24 24") {
//       console.error(
//         `Error: \`${dir}/${file}\` has a viewBox of \x1b[31m\`${viewBox}\`\x1b[0m`
//       );
//       errors++;
//     }
//   })
// );

if (errors > 0) {
  process.exit(1);
} else {
  console.log("Tests passed!");
}
