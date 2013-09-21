module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    simplemocha: {
      backend: {
        src: 'specs/*.js'
      }
    },
    watch: {
      scripts: {
        files: ['models/*.js', 'specs/*.js', 'configs/*.js', 'app.js'],
        tasks: ['simplemocha']
      },
    }
  });

  // Default task.
  grunt.registerTask('default', ['simplemocha']);
};