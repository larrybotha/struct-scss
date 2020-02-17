const nodeSass = require("node-sass");
const dartSass = require("sass");
const path = require("path");

const options = {
  file: path.resolve(__dirname, "../scss/global.scss"),
  includePaths: ["node_modules/normalize.css"],
};

describe("node-sass", () => {
  test("-> compiles without error", () => {
    const result = nodeSass.renderSync(options);

    expect(result).toHaveProperty("css");
  });
});

describe("dart-sass", () => {
  test("-> compiles without error", () => {
    const result = dartSass.renderSync(options);

    expect(result).toHaveProperty("css");
  });
});
