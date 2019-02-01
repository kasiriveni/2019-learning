module.exports = function(grunt) {
    //console.log(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: {
            src: ["dist"]
        },
        pug: {
            compile: {
                options: {
                    data: {}
                },
                files: [
                    {
                        expand: true,
                        cwd: "src",
                        src: ["**/*.pug"],
                        dest: "dist",
                        ext: ".html"
                    }
                ]
            }
        }
    });
    // load the pulgin(s)
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-pug");

    // load the task(s)
    grunt.registerTask("default", ["clean", "pug"]);
};
