const NODE_ENV = process.env.NODE_ENV;

let config = {};

if (NODE_ENV === "development") {
  config = {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "2022",
      },
    ],
  };
} else {
  config = {
    domains: ["api.alglodieloggy.com"],
  };
}

module.exports = config;
