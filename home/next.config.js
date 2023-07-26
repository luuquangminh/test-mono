const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "home",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            home: "home@https://test-mono-checkout.vercel.app/_next/static/chunks/remoteEntry.js",
            shop: "shop@https://test-mono-checkout-5r1x.vercel.app/_next/static/chunks/remoteEntry.js",
            checkout:
              "checkout@https://test-mono-checkout-lohd.vercel.app/_next/static/chunks/remoteEntry.js",
          },
          exposes: {
            "./nav": "./components/nav.js",
            "./home": "./realPages/index.js",
            "./pages-map": "./pages-map.js",
          },
          shared: {},
        })
      );
    }

    return config;
  },
};
