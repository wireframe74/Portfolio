module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    

     // Grabs all css/js files and compressese them into one file.
     uglify: {

      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },

      build: {
        src: 'js/plugins.js',
        dest: 'js/build/global.min.js'
      }

    },



  watch: {
     sass: {
      // We watch and compile sass files as normal but don't live reload here
      files: ['sass/*.scss'],
      tasks: ['sass'],
    }
  },


 sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'sass',
        src: ['*.scss'],
        dest: 'css',
        ext: '.css'
      }]
    }
  }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'watch']);

};