module.exports = function(grunt) {
  grunt.initConfig({
    webpack_server: {
      server: {
        options: {
          keepalive: true,
          entry: './test/index.js',
        },
      },
    },
  });
  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['webpack_server']);
};
