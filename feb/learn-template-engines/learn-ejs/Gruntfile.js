
// Author Kalaram Verma
// EJS template Using Grunt

module.exports = function (grunt) {

    // A very basic default task.
    // grunt.registerTask('default', 'Log some stuff.', function () {
    //     grunt.log.write('Logging some stuff...').ok();
    // });

    // Project configuration.
    grunt.initConfig({
        ejs: {
            all: {
                options: {
                    title: 'KRGLV Groups - Node Demo',
                    url: function(url) {
                      return 'http://localhost:4200/' + url;
                    },
                    students:[
                        {
                            "name": "Kalaram Verma",
                            "age": 24
                        },
                        {
                            "name": "Student 2",
                            "age": 20
                        },
                    ]
                  },
              src: ['app/**/*.ejs', '!app/partials/**/*'],
              dest: 'dist/',
              expand: true,
              ext: '.html',
            },
          },

    });

    // load npm ejs task
    grunt.loadNpmTasks('grunt-ejs');

    // Default task(s).
    grunt.registerTask('default', ['ejs']);

};