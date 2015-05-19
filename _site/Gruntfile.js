module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-build-control');

  grunt.initConfig({

    buildcontrol: {
      options: {
        dir: '_site',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:James-Oldfield/jamesoldfield2015.git',
          branch: 'gh-pages'
        }
      }
    }
  });

grunt.registerTask('default', [
    'buildcontrol:pages'
  ]);

};
