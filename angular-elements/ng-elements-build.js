const fs = require('fs-extra');
const concat = require('concat');

const jsSavePath = "../js";
const cssSavePath = "../css";
const buildDir = "./dist/angular-elements";

async function concatJS(version) {
  // files to concat
  const files = [
    `${buildDir}/runtime-${version}.js`,
    `${buildDir}/polyfills-${version}.js`,
    `${buildDir}/scripts.js`,
    `${buildDir}/main-${version}.js`
  ];

  // concat files
  await concat(files, `${jsSavePath}/app-${version}.js`);
}

(async function build() {


  await fs.ensureDir(jsSavePath);
  await fs.emptyDir(jsSavePath);

  // concat es5 and es6 files
  concatJS("es5") // es5
  concatJS("es2015") // es6

  await fs.copyFile(
    `${buildDir}/styles.css`,
    `${cssSavePath}/styles.css`
  );
})();
