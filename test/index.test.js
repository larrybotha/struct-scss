const nodeSass = require("node-sass");
const dartSass = require("sass");
const path = require("path");

const options = {
  ...require("./options"),
  file: path.resolve(__dirname, "../scss/global.scss"),
};
const entryPoints = [
  "style.scss",
  "global.scss",
  "_support.scss",
  "core/_global.scss",
  "core/_support.scss",
  "core/_reset.scss",
  "core/tools/mixins/components/grid/_index.scss",
].map(p => `../scss/${p}`);

describe("node-sass", () => {
  entryPoints.map(f => {
    test(`-> compiles ${f} without error`, () => {
      const file = path.resolve(__dirname, f);
      let result;

      try {
        result = nodeSass.renderSync({ ...options, file });
      } catch (err) {
        result = err;
        console.error(result.formatted);
      }

      expect(result).toHaveProperty("css");
    });
  });
});

describe("dart-sass", () => {
  entryPoints.map(f => {
    test(`-> compiles ${f} without error`, () => {
      const file = path.resolve(__dirname, f);
      let result;

      try {
        result = nodeSass.renderSync({ ...options, file });
      } catch (err) {
        result = err;
        console.error(result.formatted);
      }

      expect(result).toHaveProperty("css");
    });
  });
});
