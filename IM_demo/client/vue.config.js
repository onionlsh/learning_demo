module.exports = {
  chainWebpack: (config) => {
    config.resolve.symlinks(true); // css热更新

    // 配置xss
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        options.compilerOptions.directives = {
          html(node, directiveMeta) {
            (node.props || (node.props = [])).push({
              name: "innerHTML",
              value: `xss(_s(${directiveMeta.value}))`,
            });
          },
        };
        return options;
      });
  },
  devServer: {
    disableHostCheck: true, //关闭host检查
    port: process.env.port || 8080,
  },
};
