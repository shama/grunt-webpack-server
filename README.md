# grunt-webpack-server

> Fire up a webpack dev server with Grunt.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-webpack-server --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-webpack-server');
```

## The "webpack_server" task

### Overview
In your project's Gruntfile, add a section named `webpack_server` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  webpack_server: {
    server: {
      options: {
        entry: 'index.js',
        output: {
          path: '/',
        },
        port: 8000,
      },
    },
  },
})
```

### Options

It accepts all of the options webpack accepts: [https://github.com/webpack/docs/wiki/webpack-options](https://github.com/webpack/docs/wiki/webpack-options).

In addition, the following options:

#### options.port
Type: `Number`  
Default value: `8000`

The port number to run the server one.

#### options.keepalive
Type: `Boolean`
Default value: `false`

Whether to keep the task alive forever. You can also pass in an argument at the end, ie: `grunt webpack_server:target:keepalive`.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 0.1.0 - initial release
