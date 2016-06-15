module.exports = function(grunt) {

    // Задачи
    grunt.initConfig({
        // Склеиваем js
        concat: {
            main: {
                src: [
                    'js/jquery.js',
                    'js/**/*.js'  // Все JS-файлы в папке
                ],
                dest: 'build/gruntscripts.js'
            }
        },
       // Склеиваем css
	cssmin: {
		  combine: {
			files: {
			  'path/to/output.css': 
              ['path/to/input_one.css', 'path/to/input_two.css']
			}
		  }
		},
        // Сжимаем
        uglify: {
            main: {
                files: {
                    // Результат задачи concat
                    'build/gruntscripts.min.js': '<%= con-cat.main.dest %>'
                }
            }
        }
    });

    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Задача по умолчанию
    grunt.registerTask('default', ['concat', 'uglify', ‘cssmin’]);
};
