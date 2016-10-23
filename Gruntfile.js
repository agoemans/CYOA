module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect:{
			server:{
				options:{
					port: 8000,
					base:['_build/dev', 'node_modules']
				}
			}
		},

		jshint:{
			all: ['Gruntfile.js', 'js/**/*.js']
		},
		uglify: {
			options: {
				mangle: false,
				beautify: true
			},
			my_target:{
				files: {
					'_build/dev/js/CYOA.js': [
						'js/backend/backend.js',
						'js/utils/helper.js',
						'js/objects/dialog.js',
						'js/objects/character.js',
						'js/objects/mainCharacter.js',
						'js/states/gameState.js',
						'js/states/preloader.js',
						'js/data/dialogData.js',
						'js/data/constants.js',
						'js/app.js'
					]
				}
			}
		},

		clean: {
			build: {
				src: '_build'
			}
		},

		copy:{
			dev:{
				files: [
					{expand: true, cwd: 'node_modules/phaser/build/', src: ['phaser.min.js'], dest: '_build/dev/js/'},
					{expand: true, cwd: 'assets', src: ['**'],dest: '_build/dev/assets/'},
					{expand: true, cwd: 'template', src: ['**'],dest: '_build/dev'}
				]
			}
		},

		watch:{
			scripts:{
				files:['js/**/*.js'],
				tasks:['default'],
				options: {
					spawn: false
				}
			}
		}

	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');

	// Default task(s).
	grunt.registerTask('default', [
		'clean',
		'uglify',
		'copy:dev',
		'watch'
	]);

	grunt.registerTask('serverRun', 'connect:server:keepalive');

};