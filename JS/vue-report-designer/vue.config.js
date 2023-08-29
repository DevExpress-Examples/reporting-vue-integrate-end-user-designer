module.exports = {
    chainWebpack: config => {
      config.plugin('copy').tap(([pathConfigs]) => {
        pathConfigs.patterns.push({
          from: 'node_modules/ace-builds/src-min-noconflict/**/worker-json.js',
          to: 'js/[name][ext]',
        });
        return [pathConfigs];
      });
    }
  };
  