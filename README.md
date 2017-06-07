<h1 align="center">&middot;  React Pricing Table  &middot;</h1>

<div align="center">
  <strong>Fast, flexible, simple pricing tables in React.</strong>
</div>
<div align="center">
  <sub>Built with ❤︎ by
  <a href="https://www.linkedin.com/in/gergely-nagy-9a8198117/">Gergely Nagy</a> and
  <a href="">
    contributors.
  </a>
  </sub>
</div>
<br />
<div align="center">
  <!-- NPM version -->
  <a href="https://www.npmjs.com/package/react-pricing-table">
    <img src="https://badge.fury.io/js/react-pricing-table.svg"
      alt="NPM version" />
  </a>
  <!-- Downloads -->
  <a href="https://www.npmjs.com/package/react-pricing-table">
    <img src="https://img.shields.io/npm/dm/react-pricing-table.svg?style=flat"
      alt="Downloads" />
  </a>
  <!-- License-->
  <a href="">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat"
      alt="License" />
  </a>
</div>

<div align="center">
  <h3>
    <a href="">
      Website
    </a>
    <span> | </span>
    <a href="">
      Demo
    </a>
    <span> | </span>
    <a href="">
      Contributing
    </a>
    <span> | </span>
    <a href="https://gitter.im/react-pricing-table/Lobby">
      Chat
    </a>
  </h3>
</div>


## Table of Content
- [Status](#status)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Compatibility](#compatibility)
- [Local Development](#localdevelopment)
- [License](#license)
<!--- [Support](#support) -->


## Status
Pre-alpha and under heavy development, do not use!


## Features
- [x] :iphone: <strong>Responsive: </strong> Made mobile responsive with [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [ ] :white_check_mark: <strong>Test: </strong> Adding tests.

## Installation

The package can be installed via NPM:

```
npm install react-pricing-table --save
```

You’ll need to install React separately since those dependencies aren’t included in the package. Below is a simple example on how to use the PricingTable in a React view. You will also need to require the css file from this package (or provide your own). The example below shows how to include the css from this package if your build system supports requiring css files (webpack is one that does).

```js
import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';

class Example extends React.Component {

  render() {
    return  <PricingTable  highlightColor='#f44336'> ... </PricingTable>
  }
}
```

## Configuration

The basic use of the PricingTable can be described with:

```js
            <PricingTable  highlightColor='#1976D2'>
              <PricingSlot  onClick={this.submit} buttonText='TRY IT FREE' title='FREE' priceText='$0/month' onClick={this.submit}>
                <PricingDetail> <b>15</b> projects</PricingDetail>
                <PricingDetail> <b>5 GB</b> storage</PricingDetail>
                <PricingDetail> <b>5</b> users</PricingDetail>
                <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
              </PricingSlot>
              <PricingSlot highlighted onClick={this.submit} buttonText='SIGN UP' title='BASIC' priceText='$24/month' onClick={this.submit}>
                <PricingDetail> <b>35</b> projects</PricingDetail>
                <PricingDetail> <b>15 GB</b> storage</PricingDetail>
                <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                <PricingDetail> <b>Time tracking</b></PricingDetail>
              </PricingSlot>
              <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='PROFESSIONAL' priceText='$99/month' onClick={this.submit}>
                <PricingDetail> <b>100</b> projects</PricingDetail>
                <PricingDetail> <b>30 GB</b> storage</PricingDetail>
                <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                <PricingDetail> <b>Time tracking</b></PricingDetail>
              </PricingSlot>
              <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='ENTERPRISE' priceText='$200/month' onClick={this.submit}>
                <PricingDetail> <b>Unlimited</b> projects</PricingDetail>
                <PricingDetail> <b>75 GB</b> storage</PricingDetail>
                <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                <PricingDetail> <b>Time tracking</b></PricingDetail>
              </PricingSlot>
            </PricingTable>
```

Result:
![react-pricing-table](http://i.imgur.com/nScph1f.png)

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

Copyright (c) 2017 Gergely Nagy and individual contributors. Licensed under MIT license, see [LICENSE](LICENSE) for the full license.

<!--
## Support

### Sponsors

Become a sponsor and help ensure the development of independent quality
software. You can help us keep the lights on, bellies full and work days sharp
and focused on improving the state of the web. [Become a
sponsor](https://opencollective.com/choo#sponsor)

<a href="" target="_blank"><img src=""></a>
<a href="" target="_blank"><img src=""></a>
<a href="" target="_blank"><img src=""></a>

### Backers
Become a backer, and buy us a coffee (or perhaps lunch?) every month or so.
[Become a backer](https://opencollective.com/)

<a href="https://opencollective.com/" target="_blank"><img src=""></a>
<a href="https://opencollective.com/" target="_blank"><img src=""></a>
<a href="https://opencollective.com/" target="_blank"><img src=""></a>
<a href="https://opencollective.com/" target="_blank"><img src=""></a>
<a href="" target="_blank"><img src=""></a> -->
