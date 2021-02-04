# Read Time

A [Node.JS](https://nodejs.org) library to estimate the time it will take to
read a given text.

[![GitHub release](https://img.shields.io/github/release/iamtraction/read-time.svg?style=flat)](https://github.com/iamtraction/read-time/releases)
[![Dependencies](https://david-dm.org/iamtraction/read-time.svg)](https://david-dm.org/iamtraction/read-time)
[![Known Vulnerabilities](https://snyk.io/test/github/iamtraction/read-time/badge.svg?targetFile=package.json)](https://snyk.io/test/github/iamtraction/read-time?targetFile=package.json)
[![license](https://img.shields.io/github/license/iamtraction/read-time.svg)](LICENSE)
![Node.js CI](https://github.com/iamtraction/read-time/workflows/Node.js%20CI/badge.svg)
![Node.js Package](https://github.com/iamtraction/read-time/workflows/Node.js%20Package/badge.svg)


## Installation
```bash
# Stable version, from npm repository
npm install --save @iamtraction/read-time

# Latest version, from GitHub repository
npm install --save iamtraction/read-time
```

## Usage
```js
// If you've installed from npm
const readTime = require("@iamtraction/read-time");

// If you've installed from GitHub
const readTime = require("read-time");
```

#### Method: `calculate(text, options)`
```js
readTime.calculate(text, options);
```
| Parameter | Type | Optional | Default | Description |
|-|-|-|-|-|
| `text` | `String` | No | - | Text for which you want to estimate the read time. |
| `options` | `Object` | Yes | - | Options for read time estimation. |
| `options.wpm` | `Number` | Yes | `250` | Reading speed in words per minute. |

#### Returns: `string`
