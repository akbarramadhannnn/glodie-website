// /** @type {import('next').NextConfig} */
// const withPlugins = require("next-compose-plugins");
// const withImages = require("next-images");
// const withFonts = require("next-fonts");
// const withCSS = require("@zeit/next-css");
const configImage = require("./config/images");

const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  optimizeFonts: false,
  // swcMinify: true,
  images: {
    unoptimized: true,
    ...configImage,
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config, options) => {
    config.module.rules.push(
      // {
      //   test: /\.(woff|woff2|eot|ttf)$/,
      //   use: [
      //     options.defaultLoaders.babel,
      //     {
      //       loader: "url-loader?limit=100000",
      //     },
      //     {
      //       loader: "file-loader",
      //     },
      //   ],
      // },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
            },
          },
        ],
      }
      // {
      //   test: /\.(png|jpg|gif)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192,
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(jpe?g|png|gif)$/i,
      //   loader: "file-loader",
      //   // options: {
      //   //   name: "[path][name].[ext]",
      //   // },
      // }
    );
    return config;
  },
};

// const configFonts = withFonts({
//   // enableSvg: true,
//   assetPrefix: 'http://localhost:3002',
//   webpack(config, options) {
//     return config;
//   },
//   // webpack(config, options) {
//   //   config.node = {
//   //     fs: "empty",
//   //   };
//   //   config.module.rules.push({
//   //     test: /\.(png|woff|woff2|eot|ttf|svg)$/,
//   //     use: [
//   //       options.defaultLoaders.babel,
//   //       {
//   //         loader: "url-loader?limit=100000",
//   //       },
//   //       {
//   //         loader: "file-loader",
//   //       },
//   //     ],
//   //   });
//   //   return config;
//   // },
// });

// module.exports = withPlugins([withImageConfig], nextConfig);
module.exports = nextConfig;

// module.exports = withPlugins(
//   [
//     // [withCSS],
//     [withFonts],
//     {
//       poweredByHeader: false,
//     },
//   ],
//   // [
//   //   // withImages({
//   //   //   dynamicAssetPrefix: true,
//   //   //   webpack(config, options) {
//   //   //     return config;
//   //   //   },
//   //   // }),
//   // ],
//   nextConfig
// );
