/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    sass: {
      dist: {
        options: {
          loadPath: ['node_modules/foundation-sites/scss'],
          trace: true,
          style: 'nested'
        },
        files:{
          '../css/main.css': '../css/main.scss'
        }
      }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-sass');
  // Default task.
  grunt.registerTask('default', ['sass']);

};
