/*global module*/

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-run');

  // Project configuration.
  grunt.initConfig({
    alljsfiles: ['lib/**/*.js', 'test/**/*.js', 'Gruntfile.js', 'package.json', 'index.js'],
    jshint: {
      files: '<%= alljsfiles%>',
      options: {
        browser: true,
        smarttabs: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: false,
        boss: true,
        eqnull: true,
        node: true,
        expr: true,
        globals: {
          'it': true,
          'xit': true,
          'describe': true,
          'expect': true,
          'before': true,
          'after': true,
          'done': true
        }
      }
    },
    watch: {
      all: {
        files: '<%= alljsfiles%>',
        tasks: ['default']
      }
    },
    jsbeautifier: {
      beautify: {
        src: '<%= alljsfiles%>',
        options: {
          config: '.jsbeautifyrc'
        }
      },
      check: {
        src: '<%= alljsfiles%>',
        options: {
          mode: 'VERIFY_ONLY',
          config: '.jsbeautifyrc'
        }
      }
    },
    run: {
      jest: {
        exec: 'npx jest'
      }
    }
  });

  grunt.registerTask('default', ['beautify', 'jshint', 'run']);
  grunt.registerTask('beautify', ['jsbeautifier:beautify']);
  grunt.registerTask('commit', ['default']);
  grunt.registerTask('timestamp', function () {
    grunt.log.subhead(Date());
  });

};
