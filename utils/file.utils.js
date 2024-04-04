const fs = require("node:fs/promises");

async function loadFile(filename) {
  try {
    return await fs.readFile(filename, "utf8");
  } catch (e) {
    throw e;
  }
}

async function writeToFile(filename, data) {
  try {
    return await fs.writeFile(
      path.join(rootDir, filename),
      JSON.stringify(data)
    );
  } catch (e) {
    throw e;
  }
}

module.exports = {
  loadFile,
  writeToFile,
};
