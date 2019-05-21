const braintree = require("braintree");
const { Environment } = braintree;

function setEnvironment(environment) {
  let env;
  if (typeof environment === "string") {
    env = `${environment.substring(0, 1).toUpperCase()}${environment
      .substring(1)
      .toLowerCase()}`;
    env = Environment[env];

    return env;
  }

  if (typeof environment === Environment) {
    return environment;
  }

  return Environment.Sandbox;
}

class BraintreeService {
  constructor(options) {
    options.environment = setEnvironment(options.environment);

    this.client = new braintree.BraintreeGateway(options);
  }
}

module.exports = BraintreeService;
