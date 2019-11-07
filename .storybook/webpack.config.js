module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("awesome-typescript-loader")
          },
          {
            loader: require.resolve("react-docgen-typescript-loader")
          }
        ]
      },
      {
        test: /\.(less|css)$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".less"]
  }
};
