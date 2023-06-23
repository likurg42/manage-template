const postcssCustomMedia = require('postcss-custom-media');

const config = {
  plugins: [
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    }),
    postcssCustomMedia(),
  ],
};

module.exports = config;
