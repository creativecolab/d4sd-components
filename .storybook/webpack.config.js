var path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve("../"),
        use: [
          {
            loader: require.resolve("awesome-typescript-loader"),
            options: {
              presets: [["react-app", { flow: false, typescript: true }]],
              configFileName: "./.storybook/tsconfig.json"
            }
          },
          {
            loader: require.resolve("react-docgen-typescript-loader")
          }
        ]
      },
      {
        test: /\.(less|css)$/,
        include: path.resolve("../"),
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(jpg|png|svg)$/,
        include: path.resolve("../"),
        use: {
          loader: 'url-loader',
        },
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".less"]
  }
};
