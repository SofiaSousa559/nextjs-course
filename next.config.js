const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  // Se esta em desenvolvimento entao usa estes valores:
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "sofia",
        mongodb_password: "m2u2f11b",
        mongodb_clustername: "cluster0",
        mongodb_database: "mysite",
      },
    };
  }

  // Se não esta em desenvolvimento então deve estar em produção e podemos colocar outros valores:
  return {
    env: {
      mongodb_username: "sofia",
      mongodb_password: "m2u2f11b",
      mongodb_clustername: "cluster0",
      mongodb_database: "mysite-prod",
    },
  };
};
