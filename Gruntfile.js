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
        files: ['gruntfile.js']
        options: {
          globals: {
            jQuery: true,
            console: true,
            module: true,
            document: true
          }
        }
      },

      // Manage Sass compilation
      sass: {
        dist: {
          options: {
            quiet: false,
            cacheLocation: 'sass/.sass-cache'
          },
          files: {
            'style.css': 'sass/style.scss'
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
          files: ['sass/**/*.scss'],
          tasks: ['sass:dist']
        }
      }
    });

    grunt.registerTask('default', ['sass', 'jshint']);

  };
}());
