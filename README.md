# React Pricing Table

Fast, flexible, simple pricing tables in React ([Demo](https://))

## Installation

The package can be installed via NPM:

```
npm install react-pricing-table --save
```

You’ll need to install React separately since those dependencies aren’t included in the package. Below is a simple example on how to use the PricingTable in a React view. You will also need to require the css file from this package (or provide your own). The example below shows how to include the css from this package if your build system supports requiring css files (webpack is one that does).

```js
import React from 'react';
import PricingTable from 'react-pricing-table';

class Example extends React.Component {

  render() {
    return <PricingTable/>;
  }
}
```

## Configuration

The most basic use of the PricingTable can be described with:

```js
<PricingTable/>
```

## Compatibility

### React

We're always trying to stay compatible with the latest version of React. We can't support all older versions of React, since React is still < 1.0 and introducing breaking changes every release.

Latest compatible versions:
- React 0.14 or newer:
- React 0.13:
- pre React 0.13:

### Browser Support

The react pricing table is compatible with the latest versions of Chrome, Firefox, and IE10+.

Unfortunately it is difficult to support legacy browsers while maintaining our ability to develop new features in the future.  For IE9 support, it is known that the [classlist polyfill](https://www.npmjs.com/package/classlist-polyfill) is needed, but this may change or break at any point in the future.

## Local Development

The `master` branch contains the latest version of the PricingTable component. To start your example app, you can run `yarn start`. This starts a simple webserver on http://localhost:8080.

You can run `yarn test` to execute the test suite and linters. To help you develop the component we’ve set up some tests that covers the basic functionality (can be found in  `/tests`). Even though we’re big fans of testing, this only covers a small piece of the component. We highly recommend you add tests when you’re adding new functionality.

### The examples
The examples are hosted within the docs folder and are ran in the simple add that loads the PricingTable. To extend the examples with a new example, you can simply duplicate one of the existing examples and change the unique properties of your example.


## License

Copyright (c) 2016 Gergely Nagy and individual contributors. Licensed under MIT license, see [LICENSE](LICENSE) for the full license.
