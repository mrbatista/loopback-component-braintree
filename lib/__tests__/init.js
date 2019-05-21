const juggler = require("loopback-datasource-juggler");

const BraintreeConnector = require("../");

let config = {
  merchantId: "FAKE_MERCHANT_ID",
  publicKey: "FAKE_PUBLIC_KEY",
  privateKey: "FAKE_PRIVATE_KEY"
};

if (process.env.CI) {
  config = {
    environment: "sandbox",
    merchantId: process.env.BRAINTREE_MERCHANT_ID,
    publicKey: process.env.BRAINTREE_PUBLIC_KEY,
    privateKey: process.env.BRAINTREE_PRIVATE_KEY
  };
}

exports.getDataSource = function(customConfig) {
  return new juggler.DataSource(BraintreeConnector, customConfig || config);
};
