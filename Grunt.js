module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect:{
			server:{
				options:{
					port: 8080,
					base:['_build/dev']
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
					'_build/dev/js/Minesweeper.js': [
						//'node_modules/phaser/build/phaser.min.js',
						'js/Utils/CellProcessor.js',
						'js/backend/FieldCreation.js',
						'js/objects/cell.js',
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
				files:['js/**/ *.js'],
				tasks:['jshint'],
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
	grunt.registerTask('build', [
		'clean',
		'uglify',
		'copy:dev',
		'watch'
	]);

	grunt.registerTask('serverRun', 'connect:server:keepalive')

};