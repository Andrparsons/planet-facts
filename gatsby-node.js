exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const PlanetData = require("./src/data/data.json");

  PlanetData.forEach((planet) => {
    createPage({
      path: `/${planet.name}`,
      component: require.resolve("./src/templates/planet.js"),
      context: { planet },
    });
  });
};
