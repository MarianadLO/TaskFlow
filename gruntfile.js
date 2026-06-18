module.exports = function(grunt) {

    grunt.initConfig({
        less: {
        development: {
            files: {
                "./dist/css/main.css" : "./dev/less/main.less"
            },
        },
        },
        watch: {
            less: {
                files: ['dev/less/**/*.less'],
                tasks : ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less','watch']);

};