# Loopback Braintree Component

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

The [Braintree][braintree-url] connector for the LoopBack framework

## Installation

```sh
npm install --save loopback-component-braintree
```

## Usage

Define new datasource configuration for your Braintree account (file datasources.json)

```js
{
  "braintree": {
    "environment": "sandbox",
    "merchantId": "your_merchant_id",
    "publicKey": "your_public_key",
    "privateKey": "your_private_key"
    }
  }
}
```

Define new model in file model-config.json with datasource `braintree`

```js
{
  "Braintree": {
    "dataSource": "braintree",
    "public": false
  }
}
```

use model `Braintree` in your application:

```js
Braintree.gateway.transaction.sale({
  amount: '5.00',
  paymentMethodNonce: 'nonce-from-the-client',
  options: {
    submitForSettlement: true
  }
}).then(function (result) {
  if (result.success) {
    console.log('Transaction ID: ' + result.transaction.id);
  } else {
    console.error(result.message);
  }
}).catch(function (err) {
  console.error(err);
});
```

## Running tests

```sh
npm install
npm test
```

## Contributing

**We love contributions!**

When contributing, follow the simple rules:

* Don't violate [DRY](http://programmer.97things.oreilly.com/wiki/index.php/Don%27t_Repeat_Yourself) principles.
* [Boy Scout Rule](http://programmer.97things.oreilly.com/wiki/index.php/The_Boy_Scout_Rule) needs to have been applied.
* Your code should look like all the other code – this project should look like it was written by one man, always.
* If you want to propose something – just create an issue and describe your question with as much description as you can.
* If you think you have some general improvement, consider creating a pull request with it.
* If you add new code, it should be covered by tests. No tests – no code.
* If you add a new feature, don't forget to update the documentation for it.
* If you find a bug (or at least you think it is a bug), create an issue with the library version and test case that we can run and see what are you talking about, or at least full steps by which we can reproduce it.

## License

MIT © [Matteo Padovano](https://github.com/mrbatista)

[npm-image]: https://badge.fury.io/js/loopback-component-braintree.svg
[npm-url]: https://npmjs.org/package/loopback-component-braintree
[travis-image]: https://travis-ci.org/mrbatista/loopback-component-braintree.svg?branch=master
[travis-url]: https://travis-ci.org/mrbatista/loopback-component-braintree
[daviddm-image]: https://david-dm.org/mrbatista/loopback-component-braintree.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/mrbatista/loopback-component-braintree
[coveralls-image]: https://coveralls.io/repos/mrbatista/loopback-component-braintree/badge.svg
[coveralls-url]: https://coveralls.io/r/mrbatista/loopback-component-braintree
[braintree-url]: https://www.braintreepayments.com/
