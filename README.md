# config-standard-version

_config-standard-version_ is a configuration preset for [Standard Version] used by the [fundamend.dev] ecosystem.

## Installation

Use your favorite Node.js package manager, for example [npm], like so:

    npm install --save-dev @fundamend/config-standard-version

... or [yarn], like so:

    yarn add --dev @fundamend/config-standard-version

## Usage

In your [.versionrc.js], import _config-standard-version_ and spread it into the exported object, like so:

```js
const config = require('@fundamend/config-standard-version');

module.exports = {
	...config,
};
```

You can extend the imported preset by adding additional [configuration options] to the exported configuration object, for example like this:

```js
const config = require('@fundamend/config-standard-version');

module.exports = {
	...config,
	dryRun: true,
};
```

Settings that already exist in the configuration preset will be overwritten.

## License

[MIT]

[.versionrc.js]: https://github.com/conventional-changelog/standard-version#configuration
[configuration options]: https://github.com/conventional-changelog/standard-version#code-usage
[fundamend.dev]: https://fundamend.dev
[mit]: https://choosealicense.com/licenses/mit/
[npm]: https://www.npmjs.com/
[standard version]: https://github.com/conventional-changelog/standard-version
[yarn]: https://yarnpkg.com/
