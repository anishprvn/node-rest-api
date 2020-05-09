const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    openapi: "3.0.0",
    info: {
      title: "Test API",
      version: "1.0.0",
      description: "API documentaion to manage projects",
    },
    basePath: "/v1",
    servers: [
      {
        url: "http://localhost:{port}/{basePath}",
        description: "The local API server",
        variables: {
          port: {
            enum: ["8080", "443"],
            default: "8080",
          },
          basePath: {
            enum: ["v1", "v2"],
            default: "v1",
          },
        },
      },
    ],
  },
  // List of files to be processes. You can also set globs './routes/*.js'
  apis: ["api-routes.js"],
};

const specs = swaggerJsdoc(options);
// const util = require("util");

// console.log(util.inspect(specs, false, null, true /* enable colors */));

module.exports = specs;
