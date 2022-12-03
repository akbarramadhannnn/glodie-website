const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  baseUrlDomain:
    NODE_ENV === "development"
      ? "http://localhost:3002"
      : "https://alglodieloggy.com",
  baseUrlApiV1:
    NODE_ENV === "development"
      ? "http://localhost:2032/api/v1"
      : "https://api.alglodieloggy.com/api/v1",
};
