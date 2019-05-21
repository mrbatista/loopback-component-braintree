const BraintreeService = require("./braintree-service");

/**
 * Initialize the braintree service as a connector for LoopBack data sources
 * @param {dataSource} dataSource DataSource instance
 * @prop {Object} settings Connector settings
 */
exports.initialize = function(dataSource) {
  const settings = dataSource.settings || {};
  const connector = new BraintreeService(settings);
  dataSource.connector = connector;
  dataSource.connector.dataSource = dataSource;

  function DataAccessObject() {}
  connector.DataAccessObject = DataAccessObject;

  DataAccessObject.gateway = connector.client;
};
