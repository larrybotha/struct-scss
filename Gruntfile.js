/*
 * grunt
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt/blob/master/LICENSE-MIT
 */

(function () {
  'use strict';
  module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('package.json');

    // Load dependancies
    var dep, dependencies, _i, _len;

    dependencies = Object.keys(pkg.devDependencies).filter(function(o) {
      return (/^grunt-.+/).test(o);
    });

    for (_i = 0, _len = dependencies.length; _i < _len; _i++) {
      dep = dependencies[_i];
      grunt.loadNpmTasks(dep);
    }

    grunt.initConfig({

      pkg: pkg,
      // Run js through jshint
      jshint: {
        files: ['gruntfile.js', 'styleguide-js/main.js', 'js/main.js'],
        options: {
          globals: {
            jQuery: true,
            console: true,
            module: true,
            document: true
          }
        }
      },
      // Run a local server
      connect: {
        options: {
          port: 9000,
          hostname: '0.0.0.0',
          keepalive: true,
          base: 'docs'
        },
        middleware: function(connect, options) {
          return connect.static(options.base);
        }
      },
      // Manage Sass compilation
      sass: {
        dist: {
          options: {
            quiet: false,
            cacheLocation: 'css/sass/.sass-cache'
          },
          files: {
            'style.css': 'css/sass/style.scss'
          }
        },
        dev: {
          options: {
            quiet: false,
            cacheLocation: 'css/sass/.sass-cache',
            style: 'expanded'
          },
          files: {
            'css/style.doc.css': 'css/sass/style.scss'
          }
        }
      },
      // Execute shell commands
      shell: {
        kss: {
          command: [
            'rm -rf docs',
            'kss-node css/sass/docs docs --css style.css --template styleguide-template',
            'cd docs/public',
            'ln -s ../../img img',
            'ln -s ../../fnt fnt',
            'ln -s ../../js js',
            'ln -s ../../data data'
          ].join('&&'),
          options: {
            stdout: true
          }
        }
      },
      // Watch for changes to files
      watch: {
        gruntfile: {
          files: 'Gruntfile.js',
          tasks: ['jshint']
        },
        css: {
          files: ['css/sass/**/*.scss', '!css/sass/docs/**/*.scss'],
          tasks: ['sass']
        },
        styleguide: {
          files: ['styleguide-js/main.js', 'js/main.js'],
          tasks: ['jshint']
        },
        kss: {
          files: ['css/sass/**/docs/**/*.scss'],
          tasks: ['kss']
        }
      }
    });

    grunt.registerTask('kss', ['shell:kss']);

    grunt.registerTask('server', ['connect']);

    grunt.registerTask('default', ['sass', 'jshint']);

  };
}());