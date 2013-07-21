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
      pkg: grunt.file.readJSON('package.json'),
      // Minify js
      uglify: {
        dist: {
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
          },
          files: { '<%= pkg.path.js %>/main.min.js': ['<%= pkg.path.js %>/main.js'] }
        }
      },
      // Run js through jshint
      jshint: {
        files: ['gruntfile.js', 'styleguide/styleguide-js/main.js', '<%= pkg.path.js %>/main.js'],
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
          base: 'styleguide',
          keepalive: true
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
            cacheLocation: '<%= pkg.path.scss %>/.sass-cache'
          },
          files: {
            '<%= pkg.path.theme %>/style.css': '<%= pkg.path.scss %>/style.scss'
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
          files: ['<%= pkg.path.scss %>/**/*.scss'],
          tasks: ['sass']
        },
        styleguide: {
          files: ['styleguide/styleguide-js/main.js', '<%= pkg.path.js %>/main.js'],
          tasks: ['jshint']
        }
      }
    });

    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-sass');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('server', ['connect']);

    grunt.registerTask('test', ['sass', 'jshint']);

    grunt.registerTask('default', ['sass', 'jshint', 'uglify']);

  };
}());