const fs = require("fs");
const path = require("path");

const srcDir = path.resolve(__dirname, "src");

module.exports = () => {
  const entry = fs.readdirSync(srcDir).reduce(
    (a, file) => ({
      ...a,
      [path.basename(file, ".js")]: path.resolve(srcDir, file),
    }),
    {}
  );

  return {
    mode: "development",
    entry,
    output: {
      path: path.resolve(__dirname, "compiled"),
      publicPath: "dist/",
      filename: "[name].js",
      library: {
        type: "commonjs",
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
      ],
    },
  };
};
