module.exports = function(grunt) {

  // Project configuration.

  // Load all tasks from package.json
  //require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  require("matchdep").filterAll(['','grunt-contrib-*']).forEach(grunt.loadNpmTasks);


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      dist: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 2
        },
        files: {
            'styles.css': ['styles.less']
        }
      }
    },
    watch: {
      less: {
        files: [
          '*.less'
        ],
        tasks: ['less']
      }
    },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
  });

    // Register tasks
    grunt.registerTask(
    'default',
    [
      'less'
    ]
    );

    grunt.registerTask('dev', [
      'watch'
    ]);

  };
