module.exports = function(grunt) {

 var fileOrder = [
    'core/jquery.min.js',
    'core/legacy.js',
    'core/flatdoc.js',
    'theme/script.js',
 ];

 grunt.initConfig({
   uglify: {
     options: {
       mangle: false
     },
     my_target: {
       files: {
         'dist/docs.min.js': fileOrder
       }
     }
   },
   cssmin: {
     target: {
       files: [{
          expand: true,
          cwd: 'theme',
          src: '*.css',
          dest: 'dist',
          ext: '.min.css'
       }]
     }
   },
   htmlmin: {                                 
      dist: {                                     
        options: {                               
           removeComments: true,
           collapseWhitespace: true
        },
        files: {                               
           'index.html': 'dev.html',    
        }
      },
   }
 });

 grunt.loadNpmTasks('grunt-contrib-uglify');

 grunt.loadNpmTasks('grunt-contrib-cssmin');

 grunt.loadNpmTasks('grunt-contrib-htmlmin');

 grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin']);

};
