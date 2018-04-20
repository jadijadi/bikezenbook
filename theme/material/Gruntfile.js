(function () {
   'use strict';
}());
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		
		uglify: {
			options: {
		    	mangle: false
		    },
		    min: {
		        files: grunt.file.expandMapping(['assets/js/*.js', 'assets/js/foundation/*.js'], 'static/js/', {
		            rename: function(destBase, destPath) {
		                tempDestPath = destPath.split('/');
		                tempDestPath.shift();
		                tempDestPath.shift();
		                tempDestPath=tempDestPath.join('/');
		                return destBase+tempDestPath.replace('.js', '.min.js');
		            }
		        })
		    }
		},
		compass: {
			dist: {
				options: {
					sassDir: 'assets/scss',
					cssDir: 'static/css',
					environment: 'development',
					outputStyle: 'compressed'
				}
			}
		},

		watch: {
			files: ['&lt;%= jshint.files %&gt;', 'assets/scss/**/*.scss','assets/scss/**/*.css','assets/js/**/*.js'],
			tasks: ['compass','uglify']
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['uglify', 'compass', 'watch']);
};

