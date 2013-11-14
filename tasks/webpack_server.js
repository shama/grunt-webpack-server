/*
 * grunt-webpack-server
 * https://github.com/Kyle/grunt-webpack-server
 *
 * Copyright (c) 2013 Kyle Robinson Young
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var path = require('path');
  var webpack = require('webpack');
  var middleware = require('webpack-dev-middleware');
  var connect = require('connect');

  grunt.registerMultiTask('webpack_server', 'Fire up a webpack dev server.', function() {
    var options = this.options({
      entry: './index.js',
      output: {
        path: '/',
      },
      port: 8000,
      keepalive: false,
    });
    var base = path.dirname(options.entry);
    var app = connect()
      .use(connect.directory(base))
      .use(connect.static(base))
      .use(middleware(webpack(options)));

    // if index.html doesnt exist
    if (!grunt.file.exists(path.join(base, 'index.html'))) {
      app.use(function(req, res) {
        if (req.url === '/index.html') {
          res.end('<html><head><script src="bundle.js"></script></head><body></body></html>');
        }
      });
    }

    app.listen(options.port);

    // if keepalive forever
    if (options.keepalive === true || Array.prototype.slice.call(arguments, -1)[0] === 'keepalive') {
      this.async();
    }
  });

};
