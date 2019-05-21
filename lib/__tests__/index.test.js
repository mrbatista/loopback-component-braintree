const { Environment } = require("braintree");

const dataSource = require("./init");
const BraintreeService = require("../braintree-service");

describe("Braintree connector", () => {
  let ds;
  let Braintree;

  it("publicKey required", () => {
    expect(() => new BraintreeService({})).toThrow(/^Missing publicKey/);
  });

  it("privateKey required", () => {
    expect(
      () =>
        new BraintreeService({
          publicKey: "FAKE_PUBLIC_KEY"
        })
    ).toThrow(/^Missing privateKey/);
  });

  it("merchantId required", () => {
    expect(
      () =>
        new BraintreeService({
          publicKey: "FAKE_PUBLIC_KEY",
          privateKey: "FAKE_PRIVATEKEY"
        })
    ).toThrow(/^Missing merchantId/);
  });

  describe("Environment configuration", () => {
    it("invalid environment should report error", () => {
      expect(
        () =>
          new BraintreeService({
            environment: "FAKE_ENVIRONMENT",
            publicKey: "FAKE_PUBLIC_KEY",
            privateKey: "FAKE_PRIVATEKEY",
            merchantId: "FAKE_MERCHANT_ID"
          })
      ).toThrow("Missing environment");
    });

    it("support string configuration", () => {
      const braintreeService = new BraintreeService({
        environment: "sandbox",
        publicKey: "FAKE_PUBLIC_KEY",
        privateKey: "FAKE_PRIVATEKEY",
        merchantId: "FAKE_MERCHANT_ID"
      });

      const gateway = braintreeService.client;

      expect(gateway.config.environment).toBeInstanceOf(Environment);
    });

    it("support specific configuration", () => {
      const braintreeService = new BraintreeService({
        environment: Environment.Development,
        publicKey: "FAKE_PUBLIC_KEY",
        privateKey: "FAKE_PRIVATEKEY",
        merchantId: "FAKE_MERCHANT_ID"
      });

      const gateway = braintreeService.client;

      expect(gateway.config.environment).toBeInstanceOf(Environment);
    });
  });

  it("connector expose gateway property", () => {
    ds = dataSource.getDataSource();
    Braintree = ds.define("Braintree");
    expect(Braintree.gateway).toBeDefined();
  });
});
