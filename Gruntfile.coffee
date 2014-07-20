module.exports = (grunt) ->

	pkg = grunt.file.readJSON('package.json')

	#*------------------------------------*\
	#   $LOAD DEPENDENCIES
	#*------------------------------------*/
	dependencies = Object.keys(pkg.devDependencies).filter (o) ->
		/^grunt-.+/.test(o)

	for dep in dependencies
		grunt.loadNpmTasks(dep)

	#
	# Grunt configuration:
	#
	# https://github.com/cowboy/grunt/blob/master/docs/getting_started.md
	#
	grunt.initConfig
		pkg: pkg,

		# Project configuration
		# ---------------------

		#*------------------------------------*\
		#   $CONTRIB-SASS
		#*------------------------------------*/
		sass:
			options:
				quiet: false,
				cacheLocation: 'scss/.sass-cache'
			dist:
				files:
					'kss/public/css/style.css': 'scss/style.scss'


		#*------------------------------------*\
		#   $SHELL
		#*------------------------------------*/
		shell:
			dist:
				command: [
					'say "hello SCSS framework, hello!"'
				].join('&&'),
				options:
					stdout:true


		#*------------------------------------*\
		#   $BUMP
		#*------------------------------------*/
		bump:
			options:
				files: [
					'package.json'
				]
				commit: true
				commitMessage: 'bump version to %VERSION%'
				commitFiles: [
					'package.json'
				]
				createTag: false
				push: false


		#*------------------------------------*\
		#   $CONTRIB-WATCH
		#*------------------------------------*/
		watch:
			css:
				files: ['scss/**/*.scss'],
				tasks: ['sass:dist']


		#*------------------------------------*\
		#   $DEV UPDATE
		#*------------------------------------*/
		devUpdate:
			options:
				reportUpdated: false
				semver: true
				packages:
					devDependencies: true
					dependencies: false
				packageJson: null
			check:
				updateType: 'report'
			ask:
				options:
					updateType: 'prompt'
			up:
				options:
					updateType: 'force'


	#*------------------------------------*\
	#   $TASKS
	#*------------------------------------*/
	grunt.registerTask 'depcheck', ['devUpdate:check']
	grunt.registerTask 'depask', ['devUpdate:ask']
	grunt.registerTask 'depup', ['devUpdate:up']
	grunt.registerTask 'default', ['watch']
