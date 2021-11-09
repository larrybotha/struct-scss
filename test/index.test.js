const dartSass = require("sass");
const path = require("path");

const options = {
  ...require("./options"),
  file: path.resolve(__dirname, "../scss/global-only.scss"),
};
const entryPoints = [
  "style.scss",
  "global-only.scss",
  "_reset.scss",
  "core/_global.scss",
  "core/_support.scss",
  "core/_reset.scss",
  "core/tools/mixins/components/grid/_index.scss",

  '../test/test.scss'
].map((p) => `../scss/${p}`);

describe.each`
  name          | preprocessor
  ${"dartSass"} | ${dartSass}
`(`compiling with $name`, ({ preprocessor }) => {
  entryPoints.map((f) => {
    test(`-> compiles ${f} without error`, () => {
      const file = path.resolve(__dirname, f);
      let result;

      try {
        result = preprocessor.renderSync({ ...options, file });
      } catch (err) {
        result = err;
        console.error(result.formatted);
      }

      expect(result).toHaveProperty("css");
    });
  });
});
